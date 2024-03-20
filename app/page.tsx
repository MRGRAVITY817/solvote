import WalletButton from "@/components/wallet-button";
import WalletContextProvider from "@/contexts/wallet";
import Head from "next/head";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Solvote</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <WalletContextProvider>
        <WalletButton />
      </WalletContextProvider>
    </div>
  );
}
