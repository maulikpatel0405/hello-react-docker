from flask import Flask, request, jsonify
import os

app = Flask(__name__)
DATA_FILE = "/data/submissions.txt"

@app.route("/submit", methods=["POST"])
def submit():
    data = request.json
    with open(DATA_FILE, "a") as f:
        f.write(f"{data}\n")
    return jsonify({"status": "success"})

if __name__ == "__main__":
    os.makedirs("/data", exist_ok=True)
    app.run(host="0.0.0.0", port=5000)