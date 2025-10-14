"use client";
import { useState } from "react";
import BotSession from "@/components/learner/BotSession";

const Message = () => {
  const [message, setMessage] = useState<string>("message 1");
  const [select, onSelect] = useState<string>("");
  const [openRewardModal, setOpenRewardModal] = useState<boolean>(false);

  return (
    <div>
      {message === "message 1" && (
        <BotSession
          Heading="MCQ"
          route="/learner/mathchallenge"
          setValue="message 1"
          widthX=""
          setMessage={setMessage}
          onSelect={onSelect}
          setOpenModal={setOpenRewardModal}
        />
      )}
    </div>
  );
};

export default Message;
