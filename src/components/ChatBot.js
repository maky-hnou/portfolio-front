import React, { useState } from "react";
import { ChatBotIcon, CloseIcon, BotIcon, SendIcon } from "./Icons";
import { motion } from "framer-motion";
import axios from "axios";

export function ChatInterface({ messages, handleSendMessage, handleClose }) {
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSendClick = () => {
    if (message.trim() !== "") {
      handleSendMessage(message);
      setMessage(""); // Clear the input field after sending
    }
  };

  const handleClickInside = (e) => {
    e.stopPropagation(); // Prevent the click event from propagating to the parent element
  };

  return (
    <motion.div
      className="fixed w-[420px] h-[530px] bg-white bottom-5 right-8 rounded-xl border-solid border-2 border-indigo-500/100 overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.33)] flex flex-col"
      animate={{ y: -100 }}
      transition={{ delay: 0.0 }}
      onClick={handleClickInside}
    >
      <div className="flex h-14 shrink-0 bg-slate-300">
        <BotIcon />
        <div className="my-auto w-full text-black">
          <div className="font-semibold text-sm">ChatBot</div>
          <div className="flex">
            <div className="rounded-full h-2 w-2 mx-1 my-auto bg-green-600"></div>
            <div>Online</div>
          </div>
        </div>
        <CloseIcon
          className="absolute top-4 right-2 cursor-pointer"
          onClick={handleClose}
        />
      </div>
      <div className="flex-grow p-4 overflow-auto flex flex-col relative">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg max-w-[75%] break-words ${
              msg.message_by === "human"
                ? "bg-indigo-500 text-white self-end rounded-br-none"
                : "bg-gray-200 self-start rounded-bl-none"
            }`}
          >
            {msg.message_text}
            <div className="text-xs text-gray-500">{msg.timestamp}</div>
          </div>
        ))}
      </div>
      <div className="py-4 pl-4 border-t border-gray-200 flex items-center">
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          className="flex-grow p-2 border border-gray-300 rounded mr-2 bg-slate-300"
          placeholder="Type a message..."
        />
        <SendIcon
          className="p-2 cursor-pointer"
          onClick={handleSendClick}
        />
      </div>
    </motion.div>
  );
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [chatId, setChatId] = useState(null);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  const formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    const strTime = hours + ':' + minutes + ' ' + ampm;
    return strTime;
  };

  const handleSendMessage = async (message) => {
    const timestamp = formatAMPM(new Date());

    if (!chatId) {
      try {
        const response = await axios.post('http://localhost:5000/api/v1/chat', {}, {
          headers: { 'Content-type': 'application/json' }
        });
        setChatId(response.data.chat_id);

        // Send the message after setting chatId
        const messagePerson = {
          message_text: message,
          message_by: 'human',
          timestamp
        };
        setMessages((prevMessages) => [...prevMessages, messagePerson]);

        const aiResponse = await axios.post('http://localhost:5000/api/v1/message', {
          chat_id: response.data.chat_id,
          message_text: message,
          message_by: 'human'
        }, {
          headers: { 'Content-type': 'application/json' }
        });

        const messageChatbot = {
          message_text: aiResponse.data.message_text,
          message_by: 'ai',
          timestamp: formatAMPM(new Date())
        };

        setMessages((prevMessages) => [...prevMessages, messageChatbot]);
      } catch (error) {
        console.error('Error creating chat or sending message:', error);
      }
    } else {
      const messagePerson = {
        message_text: message,
        message_by: 'human',
        timestamp
      };

      setMessages((prevMessages) => [...prevMessages, messagePerson]);

      try {
        const aiResponse = await axios.post('http://localhost:5000/api/v1/message', {
          chat_id: chatId,
          message_text: message,
          message_by: 'human',
        }, {
          headers: { 'Content-type': 'application/json' }
        });

        const messageChatbot = {
          message_text: aiResponse.data.message_text,
          message_by: 'ai',
          timestamp: formatAMPM(new Date())
        };

        setMessages((prevMessages) => [...prevMessages, messageChatbot]);
      } catch (error) {
        console.error('Error sending message:', error);
      }
    }
  };

  return (
    <div
      className="right-4 bottom-4 fixed w-14 h-14 bg-gradient-to-r from-indigo-500 to-cyan-300 rounded-full cursor-pointer"
      onClick={handleClick}
    >
      {isOpen && (
        <ChatInterface
          messages={messages}
          handleSendMessage={handleSendMessage}
          handleClose={handleClose}
        />
      )}
      <ChatBotIcon />
    </div>
  );
}
