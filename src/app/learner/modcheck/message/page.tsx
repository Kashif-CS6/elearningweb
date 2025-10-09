"use client";
import { useState } from "react";
import BotSession from "@/components/learner/BotSession";

const LiveSession = () => {
  const [message, setMessage] = useState<string>("message 0");

  return (
    <div>
      {message === "message 0" && (
        <BotSession
          Heading="Amazing work, MAx! You’re one step closer to becoming a Focus Hero. Keep collecting stars to unlock your next adventure."
          route="/learner/mathchallenge"
          setValue="message 1"
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
