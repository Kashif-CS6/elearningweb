"use client";

import { useState } from "react";
import BotSession from "@/components/learner/BotSession";
import { useTranslation } from "react-i18next";

const LiveSession = () => {
  const { t } = useTranslation(); // initialize translation hook
  const [message, setMessage] = useState<string>("message 0");

  return (
    <div>
      {message === "message 0" && (
        <BotSession
          Heading={t("liveSession.heading")}
          route="/learner/mathchallenge"
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
