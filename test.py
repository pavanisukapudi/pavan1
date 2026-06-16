from google import genai
import os

client = genai.Client(
    api_key=os.environ["AQ.Ab8RN6KXFqePp6NMM_gFDweK5u-xbpMQMNwpjZUHMAfgauquwg"]
)

question = input("You: ")

response = client.models.generate_content(
    model="gemini-2.5-flash",
    contents=question
)

print("Gemini:", response.text)