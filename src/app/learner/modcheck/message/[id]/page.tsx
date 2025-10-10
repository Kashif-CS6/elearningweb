"use client";
import React, { useState } from "react";
import BotSession from "@/components/learner/BotSession";
const LastMessage = () => {
  const [Message, setMessage] = useState<string>("");
  return (
    <div>
      <BotSession
        Heading="Tomorrow, we’ll go to Mirror Land and learn how to stay calm when you feel angry. Get ready for a new adventure!"
        route=""
        widthX="w-[866px]"
        setValue="message 2"
        setMessage={setMessage}
        onSelect={() => {}}
        setOpenModal={() => {}}
      />
    </div>
  );
};

export default LastMessage;
