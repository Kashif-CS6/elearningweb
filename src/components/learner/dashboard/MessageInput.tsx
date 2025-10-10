"use client";

import { useState, KeyboardEvent, FC, Dispatch, SetStateAction } from "react";
import { Send, Mic } from "lucide-react";

interface MessageInputProps {
  openModal: Dispatch<SetStateAction<boolean>>;
}

const MessageInput: FC<MessageInputProps> = ({ openModal }) => {
  const [message, setMessage] = useState<string>("");

  const handleSend = (): void => {
    if (message.trim()) {
      console.log("Sending message:", message);
      setMessage("");
    }
  };

  const handleKeyPress = (e: KeyboardEvent<HTMLInputElement>): void => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="w-full flex items-end justify-center mb-6">
      <div className="w-full flex items-center gap-2 px-4">
        <div className="relative flex flex-1 items-center gap-3 bg-white rounded-xl shadow-lg border border-gray-200 px-6 py-3 hover:shadow-xl transition-shadow duration-200">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onKeyDown={handleKeyPress}
            placeholder="Type your message"
            className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
          />

          <button
            onClick={handleSend}
            disabled={!message.trim()}
            className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
            aria-label="Send message"
          >
            <Send className="w-5 h-5 text-gray-600" />
          </button>
        </div>
        <button
          onClick={() => console.log("Voice recording")}
          className="relative flex items-center gap-3 bg-white rounded-xl shadow-lg border border-gray-200 px-6 py-5 hover:shadow-xl transition-shadow duration-200"
          aria-label="Voice message"
        >
          <Mic
            onClick={() => openModal(true)}
            className="w-5 h-5 text-gray-600"
          />
        </button>
      </div>
    </div>
  );
};

export default MessageInput;
