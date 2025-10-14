"use client";
import React, { useState } from "react";
import BotSession from "@/components/learner/BotSession";
const LastMessage = () => {
  const [Message, setMessage] = useState<string>("");
  return (
    <div>
      <BotSession
        Heading="Done"
        route="/learner/dashboard/menu"
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
