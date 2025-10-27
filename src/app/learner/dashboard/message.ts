import { useTranslation } from "react-i18next";

export const useChatMessages = () => {
  const { t } = useTranslation();

  return [
    {
      id: "1",
      question: t("messages.1"),
      answer: "",
    },
    {
      id: "2",
      question: t("messages.2"),
      answer: "",
    },
    {
      id: "3",
      question: t("messages.3"),
      answer: "",
    },
    {
      id: "4",
      question: t("messages.4"),
      answer: "",
    },
  ];
};
