"use client";
import { useState } from "react";
import BotSession from "@/components/learner/BotSession";

const LiveSession = () => {
  const [message, setMessage] = useState<string>("message 0");

  return (
    <div>
      {message === "message 0" && (
        <BotSession
          Heading="Max, what did you notice in Samis story? Why was the magic ball helpful?"
          route="/learner/modcheck/message"
          setValue="message 0"
          widthX="w-[610px]"
          setMessage={setMessage}
          onSelect={() => {}}
          setOpenModal={() => {}}
        />
      )}
    </div>
  );
};

export default LiveSession;
