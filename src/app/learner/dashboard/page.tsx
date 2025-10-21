"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Search,
  Globe,
  Moon,
  Grid3x3,
  Bell,
  Mic,
  FileText,
  X,
  CopyIcon,
  Link,
} from "lucide-react";
import Image from "next/image";
import MessageInput from "@/components/learner/dashboard/MessageInput";
import Hero from "@/components/learner/dashboard/Hero";
import TopHeader from "@/components/TopHeader";
import Main from "@/components/learner/dashboard/Main";
export default function Home() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [replay, setReplay] = useState<boolean>(false);
  const router = useRouter();

  return (
    <div className={`p-4`}>
      {/* top header */}
      <div>
        <TopHeader />
        <Hero />
        <Main />
      </div>
      {/* end section  */}
    </div>
  );
}
