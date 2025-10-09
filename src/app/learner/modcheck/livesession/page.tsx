"use client";
import { useState } from "react";
import BotSession from "@/components/learner/BotSession";

const LiveSession = () => {
  const [changeLine, setChangeLine] = useState<boolean>(false);
  const [message, setMessage] = useState<string>("message 0");

  return (
    <div>
      {message === "message 0" && (
        <BotSession
          Heading="Max, what did you notice in Samis story? Why was the magic ball helpful?"
          route="/learner/mathchallenge"
          setValue="message 1"
          widthX="w-[610px]"
          setMessage={setMessage}
        />
      )}
      {message === "message 1" && (
        <BotSession
          Heading="Because it helped him focus."
          route="/learner/mathchallenge"
          setValue="message 1"
          setMessage={setMessage}
        />
      )}
    </div>
  );
};

export default LiveSession;
