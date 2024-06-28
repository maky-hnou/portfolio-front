import React, { useState } from "react";
import { ChatBotIcon, CloseIcon, BotIcon } from "./Icons";
import { motion } from "framer-motion";

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
              msg.type === "user"
                ? "bg-indigo-500 text-white self-end rounded-br-none"
                : "bg-gray-200 self-start rounded-bl-none"
            }`}
          >
            {msg.text}
          </div>
        ))}
      </div>
      <div className="p-4 border-t border-gray-200 flex items-center">
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          className="flex-grow p-2 border border-gray-300 rounded mr-2 bg-slate-300"
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

  const handleClose = () => {
    setIsOpen(false);
  };

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { text: message, type: "user" },
      { text: "Your message has been received", type: "bot" },
    ]);
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
