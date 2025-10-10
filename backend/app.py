from flask import Flask, request, jsonify
from evaluator import evaluate_personalization 
from dotenv import load_dotenv
import os, openai

app = Flask(__name__)



load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")


@app.route("/evaluate", methods=["POST"])
def evaluate():
    data = request.get_json()
    script = data.get("script", "")

    if not script.strip():
        return jsonify({"error": "No script provided"}), 400

    result_text = evaluate_personalization(script)

    # Optional: Parse structured result
    try:
        score = int(result_text.split("Score:")[1].split("\n")[0].strip())
        reason = result_text.split("Reason:")[1].split("Tips:")[0].strip()
        tips = result_text.split("Tips:")[1].strip().split("\n")
        tips = [tip.strip("- ").strip() for tip in tips if tip.strip()]
    except Exception:
        return jsonify({"error": "Could not parse result"}), 500

    return jsonify({
        "score": score,
        "reason": reason,
        "tips": tips
    })

if __name__ == "__main__":
    app.run(debug=True)
