import openai
import re


def evaluate_personalization(script_text):
    response = openai.ChatCompletion.create(
        model="gpt-4o",
        messages=[
            {
                "role": "system",
                "content": (
                    "You are a speech evaluator. Analyze the following speech and provide:\n"
                    "1. A personalization score (1–10, but do not exceed 8 even if it deserves more).\n"
                    "2. A short reason (1–2 sentences) for the score.\n"
                    "3. 2–3 actionable tips to make the speech more personal.\n\n"
                    "A highly personalized speech:\n"
                    "1. Is based on a genuine self-lived experience — not something that anyone else could deliver.\n"
                    "2. Describes at least one emotion — such as fear, joy, grief, surprise, or excitement.\n"
                    "3. Includes personal anecdotes — specific events, thoughts, or memories.\n"
                    "4. Can include humor, but it must feel authentic and rooted in the speaker’s personality.\n"
                    "5. Talks about how the speaker felt or experienced the topic, not just factual information.\n"
                    "6. Give the user an example of a descriptive emotion.\n"
                    "7. If the topic is a holiday or event, it must focus on feelings and experiences — not just places or details.\n\n"
                    "A generic speech will:\n"
                    "- Sound like a textbook or Wikipedia entry.\n"
                    "- Lack personal details or emotion.\n"
                    "- Be interchangeable between speakers.\n\n"
                    "Return your response in this format exactly:\n"
                    "Score: <1-10>\n"
                    "Reason: <One or two clear sentences explaining the score>\n"
                    "Tips:\n"
                    "- <Tip 1>\n"
                    "- <Tip 2>\n"
                    "- <Tip 3>"
                )
            },
            {
                "role": "user",
                "content": f"Here is the speech:\n\n{script_text}"
            }
        ],
        temperature=0.5
    )

    result = response["choices"][0]["message"]["content"]

    # --- Extract numeric score and cap at 8 ---
    match = re.search(r"Score:\s*(\d+)", result)
    if match:
        score = int(match.group(1))
        if score > 8:
            result = re.sub(r"Score:\s*\d+", "Score: 8", result)

    return result