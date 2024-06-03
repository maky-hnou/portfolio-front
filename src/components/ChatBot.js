import React from "react";
import Image from "next/image";
import { ChatBotIcon } from "./Icons";
import chatboticon from "../../media/chatbot.png";

export default function ChatBot({ classname }) {
  return (
    <div className="right-4 bottom-4 fixed w-14 h-14 bg-gradient-to-r from-indigo-500 to-cyan-300 rounded-full cursor-pointer">
      <ChatBotIcon />

    </div>
  );
}
