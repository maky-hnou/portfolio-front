import React, { useState, useRef, useEffect } from "react";
import { ChatBotIcon, CloseIcon, BotIcon, SendIcon } from "./Icons";
import { motion, AnimatePresence } from "framer-motion";
import axios from "axios";
import ReactMarkdown from "react-markdown"; // Import react-markdown

export function ChatInterface({
  messages,
  handleSendMessage,
  handleClose,
  handleDelay,
}) {
  const [message, setMessage] = useState("");
  const messagesEndRef = useRef(null);

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

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <motion.div
      className="fixed w-[380px] h-[530px] bg-white bottom-4 right-8 rounded-xl border-solid border-2 border-indigo-500/100 overflow-hidden shadow-[0_25px_50px_-12px_rgba(0,0,0,0.33)] flex flex-col sm:w-[350px] sm:h-[540px] sm:right-4"
      initial={{ y: 600 }} // Start position below the screen
      animate={{ y: 0 }} // Animate to position 0 (visible on screen)
      exit={{ y: 600 }} // Exit animation goes back down
      transition={{
        type: "spring",
        stiffness: 100,
        delay: handleDelay ? 0.5 : 0,
      }} // Smooth transition
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
        {/* Welcome message */}
        <div className="mb-2 p-2 rounded-lg max-w-[75%] bg-gray-200 self-start rounded-bl-none">
          Welcome to the chat, feel free to ask any question about Hani, and
          I'll do my best to answer.
        </div>

        {/* messages */}
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`mb-2 p-2 rounded-lg max-w-[75%] break-words ${
              msg.message_by === "human"
                ? "bg-indigo-500 text-white self-end rounded-br-none"
                : "bg-gray-200 self-start rounded-bl-none"
            }`}
          >
            {/* Render markdown if the message is from the AI */}
            {msg.message_by === "ai" ? (
              <ReactMarkdown>{msg.message_text}</ReactMarkdown>
            ) : (
              msg.message_text
            )}
            <div className="text-xs text-gray-500">{msg.timestamp}</div>
          </div>
        ))}

        {/* Dummy div for scrolling */}
        <div ref={messagesEndRef} />
      </div>
      <div className="py-4 pl-4 border-t border-gray-200 flex items-center">
        <input
          type="text"
          value={message}
          onChange={handleInputChange}
          className=" w-72 flex-grow p-2 border border-gray-300 rounded mr-2 bg-slate-300 sm:w-64"
          placeholder="Type a message..."
        />
        <SendIcon className="p-2 cursor-pointer" onClick={handleSendClick} />
      </div>
    </motion.div>
  );
}

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [chatId, setChatId] = useState(null);
  const [isChatAnimating, setIsChatAnimating] = useState(false);

  const handleClick = () => {
    if (!isOpen) {
      // Start the chat opening animation sequence
      setIsChatAnimating(true);
      setIsOpen(true);
    } else {
      // Start the chat closing animation sequence
      setIsChatAnimating(true);
      setIsOpen(false);
    }
  };

  const handleClose = () => {
    // Trigger the closing of chat on CloseIcon click
    setIsChatAnimating(true);
    setIsOpen(false);
  };

  const formatAMPM = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    const ampm = hours >= 12 ? "PM" : "AM";
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? "0" + minutes : minutes;
    const strTime = hours + ":" + minutes + " " + ampm;
    return strTime;
  };

  const handleSendMessage = async (message) => {
    const timestamp = formatAMPM(new Date());

    if (!chatId) {
      try {
        const response = await axios.post(
          "http://localhost:5000/api/v1/chat",
          {},
          {
            headers: { "Content-type": "application/json" },
          }
        );
        setChatId(response.data.chat_id);

        // Send the message after setting chatId
        const messagePerson = {
          message_text: message,
          message_by: "human",
          timestamp,
        };
        setMessages((prevMessages) => [...prevMessages, messagePerson]);

        const aiResponse = await axios.post(
          "http://localhost:5000/api/v1/message",
          {
            chat_id: response.data.chat_id,
            message_text: message,
            message_by: "human",
          },
          {
            headers: { "Content-type": "application/json" },
          }
        );

        const messageChatbot = {
          message_text: aiResponse.data.message_text,
          message_by: "ai",
          timestamp: formatAMPM(new Date()),
        };

        setMessages((prevMessages) => [...prevMessages, messageChatbot]);
      } catch (error) {
        console.error("Error creating chat or sending message:", error);
      }
    } else {
      const messagePerson = {
        message_text: message,
        message_by: "human",
        timestamp,
      };

      setMessages((prevMessages) => [...prevMessages, messagePerson]);

      try {
        const aiResponse = await axios.post(
          "http://localhost:5000/api/v1/message",
          {
            chat_id: chatId,
            message_text: message,
            message_by: "human",
          },
          {
            headers: { "Content-type": "application/json" },
          }
        );

        const messageChatbot = {
          message_text: aiResponse.data.message_text,
          message_by: "ai",
          timestamp: formatAMPM(new Date()),
        };

        setMessages((prevMessages) => [...prevMessages, messageChatbot]);
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <div className="fixed right-4 bottom-4">
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            className="w-14 h-14 bg-gradient-to-r from-indigo-500 to-cyan-300 rounded-full cursor-pointer"
            initial={{ y: 100 }} // Icon starts off-screen at the bottom
            animate={{ y: 0 }} // Icon animates to its normal position
            exit={{ y: 100 }} // Icon moves to the bottom when chat opens
            transition={{
              type: "spring",
              stiffness: 100,
              delay: isChatAnimating ? 0.5 : 0,
            }} // Add delay when animating
            onClick={handleClick}
            onAnimationComplete={() => setIsChatAnimating(false)}
          >
            <ChatBotIcon />
          </motion.div>
        )}
      </AnimatePresence>

      <AnimatePresence>
        {isOpen && (
          <ChatInterface
            messages={messages}
            handleSendMessage={handleSendMessage}
            handleClose={handleClose}
            handleDelay={isChatAnimating}
          />
        )}
      </AnimatePresence>
    </div>
  );
}
