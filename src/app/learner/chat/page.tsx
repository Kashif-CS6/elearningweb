"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Globe,
  Moon,
  Grid3x3,
  Bell,
  Mic,
  FileText,
  X,
  CopyIcon,
  Link,
  Send,
} from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";

export const messages = [
  {
    id: "1",
    question: "Who are you?",
    answer: "",
  },
  {
    id: "2",
    question: "What do you wish for?",
    answer: "",
  },
  {
    id: "3",
    question: "What's your problem?",
    answer: "",
  },
  {
    id: "4",
    question: "What are your dreams?",
    answer: "",
  },
];

const Chat = () => {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [replay, setReplay] = useState<boolean>(false);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [messageHistory, setMessageHistory] = useState(messages);
  const [userAnswer, setUserAnswer] = useState("");
  const [count, setCount] = useState<number>(0);
  const router = useRouter();

  const handleSend = () => {
    if (userAnswer.trim() === "") return;

    const updatedMessages = [...messageHistory];
    updatedMessages[currentIndex].answer = userAnswer;
    setMessageHistory(updatedMessages);

    if (messageHistory.length - 1 === count) {
      toast.success("Good answers!");
      setTimeout(() => {
        router.push("/learner/dashboard/menu");
      }, 2000);

      return;
    }
    setUserAnswer("");
    setCount((prev) => prev + 1);

    if (currentIndex < messages.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handleKeyPress = (e: any) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="h-screen flex items-center justify-center">
      <div className="w-[747.18px] h-[925px] border border-gray-200 mx-auto bg-white rounded-[6px] p-4 px-2 shadow-lg">
        <div className=" p-6 flex flex-col h-full  justify-between gap-10">
          {/* Chat History */}
          <div className="flex flex-col justify-between gap-4 overflow-y-auto ">
            {messageHistory.map((msg, index) => (
              <div key={msg.id}>
                {index <= currentIndex && (
                  <>
                    <div className="flex items-center gap-3">
                      <div>
                        <Image
                          src="/ai-icon.svg"
                          width={30}
                          height={39.55}
                          alt="ai-icon"
                        />
                      </div>
                      <span className="text-gray-800 font-[400]">
                        {msg.question}
                      </span>
                    </div>
                    {msg.answer && (
                      <div className="flex items-end gap-2 justify-end mt-2">
                        <div className="w-fit md:w-[500px] xl:w-fit bg-gray-100 rounded-[6px] py-2 pl-4 pr-10 rounded-tr-full">
                          <h1 className="text-[12px] pt-2">{msg.answer}</h1>
                        </div>
                        <Image
                          src="/j-1.jpg"
                          width={40}
                          height={100}
                          alt="J-1"
                          className="rounded-full h-12 w-12 object-cover"
                        />
                      </div>
                    )}
                  </>
                )}
              </div>
            ))}
          </div>

          {/* Current Question Input */}
          {currentIndex < messages.length && (
            <div className="mt-auto">
              <div className="relative flex flex-1 items-center gap-3 bg-white rounded-xl shadow-lg border border-gray-200 px-6 py-3 hover:shadow-xl transition-shadow duration-200">
                <input
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
                  placeholder="Type your answer..."
                />
                <button
                  onClick={handleSend}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200 disabled:opacity-40 disabled:cursor-not-allowed"
                >
                  <Send size={15} />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
