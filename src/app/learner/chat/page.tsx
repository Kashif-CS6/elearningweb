"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Send } from "lucide-react";
import Image from "next/image";
import toast from "react-hot-toast";
import { useChatMessages } from "../dashboard/message";
import { useTranslation } from "react-i18next";

const Chat = () => {
  const { t } = useTranslation();
  const router = useRouter();
  const messages = useChatMessages();

  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [messageHistory, setMessageHistory] = useState(messages);
  const [userAnswer, setUserAnswer] = useState("");
  const [count, setCount] = useState<number>(0);

  const handleSend = () => {
    if (userAnswer.trim() === "") return;

    const updatedMessages = [...messageHistory];
    updatedMessages[currentIndex].answer = userAnswer;
    setMessageHistory(updatedMessages);

    if (messageHistory.length - 1 === count) {
      toast.success(t("chatPage.goodAnswers"));
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

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="my-20 md:my-0 md:h-screen flex items-center justify-center">
      <div className="w-80 mx-2 md:w-[747.18px] h-[500px] border border-gray-200 bg-white rounded-[6px] md:p-4 shadow-lg overflow-x-hidden">
        <div className="p-4 md:p-6 flex flex-col h-full justify-between gap-10">
          {/* Chat History */}
          <div className="flex flex-col justify-between gap-4 overflow-y-auto">
            {messageHistory.map((msg, index) => (
              <div key={msg.id}>
                {index <= currentIndex && (
                  <>
                    <div className="flex items-center gap-3">
                      <Image
                        src="/ai-icon.svg"
                        width={30}
                        height={39.55}
                        alt="ai-icon"
                      />
                      <span className="text-black text-[12px] md:text-lg font-[400]">
                        {msg.question}
                      </span>
                    </div>
                    {msg.answer && (
                      <div className="flex items-end gap-2 justify-end mt-2">
                        <div className="w-fit  bg-gray-100 rounded-[6px] py-2 pl-4 pr-10 rounded-tr-full">
                          <h1 className="text-[12px] pt-2">{msg.answer}</h1>
                        </div>
                        <Image
                          src="/j-1.jpg"
                          width={40}
                          height={40}
                          alt="User avatar"
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
              <div className="relative flex items-center gap-3 bg-white rounded-xl shadow-lg border border-gray-200 px-6 py-3">
                <input
                  value={userAnswer}
                  onChange={(e) => setUserAnswer(e.target.value)}
                  onKeyPress={handleKeyPress}
                  className="flex-1 bg-transparent outline-none text-gray-700 placeholder-gray-400 text-sm"
                  placeholder={t("chatPage.placeholder")}
                />
                <button
                  onClick={handleSend}
                  className="p-2 rounded-full hover:bg-gray-100 transition-colors duration-200"
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
