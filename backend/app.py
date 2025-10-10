from flask import Flask, request, jsonify
from flask_cors import CORS
from evaluator import evaluate_personalization
from dotenv import load_dotenv
import os
import openai
import re

app = Flask(__name__)
CORS(app)  # Allow frontend to access this API

# Load environment variables
load_dotenv()
openai.api_key = os.getenv("OPENAI_API_KEY")


@app.route("/")
def home():
    return jsonify({
        "status": "ok",
        "message": "Xperio Speech Evaluator API is running 🚀"
    })


@app.route("/evaluate", methods=["POST"])
def evaluate():
    try:
        data = request.get_json(force=True)
        script = data.get("script", "").strip()

        if not script:
            return jsonify({"error": "Speech script is empty"}), 400

        # Call evaluator
        result_text = evaluate_personalization(script)

        # --- Parse structured result safely ---
        score_match = re.search(r"Score:\s*(\d+)", result_text)
        reason_match = re.search(r"Reason:\s*(.+?)\nTips:", result_text, re.DOTALL)
        tips_match = re.findall(r"-\s*(.+)", result_text.split("Tips:")[1] if "Tips:" in result_text else "")

        return jsonify({
            "score": int(score_match.group(1)) if score_match else None,
            "reason": reason_match.group(1).strip() if reason_match else "",
            "tips": tips_match
        })

    except Exception as e:
        # Always return JSON on errors (not HTML)
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(debug=True)
