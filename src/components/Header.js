import { ConnectButton } from "@web3uikit/web3";
import React from "react";

function Header() {
  return (
    <div className="p-5 border-b-2 flex flex-row items-center">
      <h1 className="p-4 font-bold text-3xl">Decentralized Lottery</h1>
      <div className="ml-auto py-2 px-4">
        <ConnectButton moralisAuth={false} />
      </div>
    </div>
  );
}

export default Header;
