import { useEffect, useState } from "react";
import { Flex } from "@chakra-ui/react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";

import { useNavigate } from "react-router-dom";

export default function Home() {
  const [currentAccount, setCurrentAccount] = useState(null);
  const navigate = useNavigate();
  const checkWalletIsConnected = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      console.log("Make sure you have installed Metamask");
    } else {
      console.log("Wallet exists");
    }
    const accounts = await ethereum.request({ method: "eth_accounts" });
    if (accounts.length !== 0) {
      const account = accounts[0];
      console.log("Found an authorized account: ", account);
      setCurrentAccount(account);
    } else {
      console.log("No authorized account found");
    }
  };
  const connectWalletHandler = async () => {
    const { ethereum } = window;
    if (!ethereum) {
      alert("Please Install Metamask");
    }
    try {
      const accounts = await ethereum.request({
        method: "eth_requestAccounts",
      });
      console.log("Found an account! address : ", accounts[0]);
      navigate("/mint");
      setCurrentAccount(accounts[0]);
    } catch (err) {
      console.log(err);
    }
  };
  const connectWalletButton = () => {
    return (
      <Flex onClick={connectWalletHandler} className="Home-ConnectWallet">
        Login to Connect Wallet
      </Flex>
    );
  };

  useEffect(() => {
    checkWalletIsConnected();
  }, [currentAccount]);

  return (
    <Flex className="Container">
      <Navbar />
      <Flex className="Home-Container">
        <Flex>
          <h1 className="heading"><span className="sheading">Welcome to</span> {'\n'}DJ Coin!</h1>
        </Flex>
        <Flex>{connectWalletButton()}</Flex>
      </Flex>
      <Flex className="About-Container">
        <h1>DJ Coin Staking System</h1>
        <p>The 21st century has seen the advent of technologies. One of these technologies is the blockchain. A blockchain can be defined as a type of digital ledger that consists of a growing list of records, called blocks, that are securely linked to each other by using a cryptographic hash of the previous block. Using smart contracts on a blockchain, decentralized finance (commonly abbreviated as DeFi) provides financial instruments without relying on middlemen like brokerages, exchanges, or banks.</p>
        <p>
        Staking is when you lock crypto assets for a set period of time to help support the operation of a blockchain. In return for staking your crypto, you earn more cryptocurrency. Our proposed work is the implementation of such a staking platform where our Custom token can be freshly minted, staked and withdrawn.
        </p>
        <p>In the proposed project, we'll be using the blockchain to build a decentralized finance (Defi) system in which users can stake our own tokens in exchange for rewards.
        </p>

      </Flex>
      <Footer />
    </Flex>
  );
}
