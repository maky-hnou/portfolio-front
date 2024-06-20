import React, { useState } from "react";
import { ChatBotIcon } from "./Icons";
import { motion } from "framer-motion";

export function ChatInterface({ messages, handleSendMessage }) {
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
      <div className="flex-grow p-4 overflow-auto">
        {messages.map((msg, index) => (
          <div key={index} className="mb-2 p-2 bg-gray-100 rounded">
            {msg}
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200 flex items-center">
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          className="flex-grow p-2 border border-gray-300 rounded mr-2"
          placeholder="Type a message..."
        />
        <button
          onClick={handleSendClick}
          className="bg-indigo-500 text-white p-2 rounded"
        >
          Send
        </button>
      </div>
    </motion.div>
  );
}

export default function ChatBot({ classname }) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const handleSendMessage = (message) => {
    setMessages([...messages, message]);
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
        />
      )}
      <ChatBotIcon />
    </div>
  );
}
