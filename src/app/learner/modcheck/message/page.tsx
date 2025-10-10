"use client";
import { useState } from "react";
import BotSession from "@/components/learner/BotSession";

const Message = () => {
  const [message, setMessage] = useState<string>("message 0");
  const [select, onSelect] = useState<string>("");
  const [openRewardModal, setOpenRewardModal] = useState<boolean>(false);

  return (
    <div>
      {message === "message 0" && (
        <BotSession
          Heading="Amazing work, MAx! You’re one step closer to becoming a Focus Hero. Keep collecting stars to unlock your next adventure."
          route="/learner/mathchallenge"
          widthX="w-[866px]"
          setValue="message 1"
          setMessage={setMessage}
          onSelect={() => {}}
          setOpenModal={() => {}}
        />
      )}
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
