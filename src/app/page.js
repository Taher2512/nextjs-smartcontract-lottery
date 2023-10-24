"use client";

import Header from "@/components/Header";
import LotteryEntrance from "@/components/LotteryEntrance";
import ManualHeader from "@/components/ManualHeader";
import { NotificationProvider } from "@web3uikit/core";
import Image from "next/image";
import { MoralisProvider } from "react-moralis";

export default function Home() {
  return (
    <MoralisProvider initializeOnMount={false}>
      <NotificationProvider>
        <main>
          {/* <ManualHeader /> */}
          <Header />
          <LotteryEntrance />
        </main>
      </NotificationProvider>
    </MoralisProvider>
  );
}
