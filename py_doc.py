from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# Store chats in memory for simplicity
chats = {}

@app.route('/api/v1/chat', methods=['POST'])
def create_chat():
    chat_id = str(len(chats) + 1)
    chats[chat_id] = []
    print(f"/chat: chat_id: {chat_id}")
    return jsonify({"chat_id": chat_id})

@app.route('/api/v1/message', methods=['POST'])
def send_message():
    data = request.json
    chat_id = data.get('chat_id')
    user_message = data.get('message')

    if not chat_id or not user_message:
        print(f"Error: {chat_id}, {user_message}")
        return jsonify({"error": "Invalid request"}), 400

    response_message = "This is a response to: " + user_message

    chats[chat_id].append({"type": "person", "message": user_message})
    chats[chat_id].append({"type": "chatbot", "message": response_message})
    print(f"Error: {chat_id}, {user_message}")

    return jsonify({"ai_message": response_message})

if __name__ == '__main__':
    app.run(debug=True)
