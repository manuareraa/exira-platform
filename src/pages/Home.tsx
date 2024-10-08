import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import solanaLogo from "../assets/img/solanaLogo.png";
import heroImage from "../assets/img/hero.png";
import HeroCards from "../components/custom/HeroCards";
import {
  faArrowUpRightDots,
  faFolderOpen,
  faHandHoldingDollar,
  faShieldHalved,
  faUserCheck,
  faCircleCheck,
  faHeart,
} from "@fortawesome/free-solid-svg-icons";
import PriceBar from "../components/animata/PriceBar";
import Footer from "../components/custom/Footer";

import { useRef, useState } from "react";
import CustomGlobe from "../components/custom/CustomGlobe";
import BoxReveal from "../components/magic/TextBoxReveal";
import WordRotate from "../components/magic/TextRotate";
import { HeroScrollDemo } from "../components/custom/ContainerCustomerAnimation";
import {
  CardContainer,
  CardBody,
  CardItem,
} from "../components/aceternity/3DCard";

import binanceLogo from "../assets/img/binance-t.png";
import { CustomLamp } from "../components/custom/LampContainer";
import { useNavigate } from "react-router-dom";
import { TextGenerateEffect } from "../components/aceternity/text-generate-effect";
import HomeChain from "../components/custom/HomeChain";

function Home() {
  const [currency, setCurrency] = useState("USD");
  const navigate = useNavigate();

  return (
    <div className="flex flex-col">
      {/* Top hero container */}
      <div className="container flex flex-col-reverse items-center justify-center px-4 mx-auto space-y-8 lg:flex-row lg:space-x-4 lg:space-y-0">
        {/* Left container */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left gap-y-5 w-full lg:w-[55rem]">
          {/* Text container */}
          <div className="flex flex-col items-center justify-center lg:items-start">
            <div className="mb-3 text-3xl lg:text-3xl">
              The New Age De-Fi Protocol for Real-Estate Properties
            </div>
            {/* <BoxReveal boxColor={"#000000"} duration={1.0}>
              <div className="flex flex-col text-5xl gap-y-3 lg:text-[5rem]">
                <div className="font-bold">Own Real Estate Tokens</div>
              </div>
            </BoxReveal> */}
            <div className="flex flex-col font-bold text-5xl gap-y-3 lg:text-[5rem]">
              <TextGenerateEffect words="Own Real Estate Tokens" />
            </div>
            <div className="flex flex-col text-5xl font-bold gap-y-3 lg:text-[5rem]">
              <TextGenerateEffect words="Own the Future" />
            </div>
            {/* <BoxReveal boxColor={"#000000"} duration={1.0}>
              <div className="flex flex-col text-5xl gap-y-3 lg:text-[5rem]">
                <div className="font-bold">Own the Future</div>
              </div>
            </BoxReveal> */}

            <div className="mt-4 text-3xl lg:text-[3rem]">
              <p className="lg:leading-[3.5rem] justify-center flex flex-col items-center lg:items-start">
                <div className="flex flex-row items-center gap-x-3">
                  <WordRotate
                    className=""
                    words={["Invest", "Earn", "Borrow", "Lend", "Trade"]}
                  />
                  <p>cross-sector properties</p>
                </div>
                <p className="">across the globe.</p>
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center mt-1 text-xl md:flex-row lg:text-xl md:gap-x-3 gap-y-3 lg:gap-y-0">
            <FontAwesomeIcon icon={faCircleCheck} className="" />
            <p>
              Safe, Secure, and Verified Assets. A Stable Market with Low
              Volatility.
            </p>
          </div>
        </div>

        {/* Right container */}
        <div className="w-full max-w-md md:max-w-lg lg:max-w-xl">
          <CustomGlobe />
        </div>
      </div>

      {/* Bottom container */}
      <div className="flex flex-col items-center justify-center w-full px-4 mt-16 mb-40">
        <HeroCards />
      </div>

      {/* Secure choice container */}
      <div className="container flex flex-col items-center justify-center gap-8 mx-auto lg:flex-row my-28 lg:gap-x-20">
        {/* Left container */}
        <div className="flex flex-col items-start text-center lg:text-left">
          <p className="text-4xl font-bold">Real Estate: The Secure Choice</p>
          <p className="max-w-lg text-lg">
            While stock markets fluctuate, real estate offers a reliable and
            safer investment option.
          </p>
        </div>
        {/* Right container */}
        <div className="flex flex-col items-center justify-center gap-y-4">
          {[
            {
              icon: faUserCheck,
              text: "Fractional Ownership, Full Potential",
            },
            {
              icon: faShieldHalved,
              text: "Property-Backed Security",
            },
            {
              icon: faFolderOpen,
              text: "Diversify with Ease",
            },
            {
              icon: faHandHoldingDollar,
              text: "Flexible for Every Investor",
            },
            {
              icon: faArrowUpRightDots,
              text: "Stable Growth, Less Risk",
            },
          ].map((item, index) => (
            <CardContainer key={index} className="inter-var">
              <CardBody className="relative group/card w-full sm:w-[30rem] h-auto rounded-xl">
                <CardItem translateZ="100" className="w-full">
                  <div className="flex flex-row items-center justify-between w-full sm:w-[30rem] p-6 md:px-8 gap-x-4 md:gap-x-20 rounded-2xl bg-black/10">
                    <div className="flex flex-row items-center gap-x-4">
                      <FontAwesomeIcon icon={item.icon} size="xl" />
                      <p className="text-md md:text-xl">{item.text}</p>
                    </div>
                  </div>
                </CardItem>
              </CardBody>
            </CardContainer>
          ))}
        </div>
      </div>

      {/* Blockchain container */}
      <HomeChain />

      {/* Crypto for everyone container */}
      <div className="container flex flex-col justify-center mx-auto lg:flex-row gap-x-10 mt-28">
        {/* Left container */}
        <div className="flex flex-col px-6 gap-y-3 lg:px-0 lg:w-1/2">
          <div className="flex flex-col items-center gap-y-2 lg:items-start">
            <p className="text-4xl font-bold text-center lg:text-left">
              Seamless Crypto for Everyone
            </p>
            <p className="max-w-lg text-lg leading-tight text-center lg:text-left">
              No more worries about wallet, lost private key, gas and so on.
              Provest fully abstracts the complexity and gives you a seamless
              crypto experience in a secure way. It’s your wallet, your crypto,
              your shares.
            </p>
          </div>
          <div className="flex flex-col items-center py-6 mt-3 lg:py-0 gap-y-3 lg:items-start">
            {[
              "Fully Self-Custodial",
              "Recoverable Wallets",
              "Exportable Private Key",
            ].map((item, index) => (
              <div key={index} className="flex flex-row items-center gap-x-3">
                <div className="flex items-center justify-center w-10 h-10 bg-black rounded-full">
                  <p className="text-sm font-bold text-white">{index + 1}</p>
                </div>
                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Right container */}
        <div className="flex flex-row items-center justify-center mt-8 lg:mt-0">
          <ul className="timeline timeline-vertical">
            {[
              "Connect your Wallet",
              "Select Property to Invest",
              "Invest with Crypto",
              "Property Share Received",
            ].map((item, index) => (
              <li key={index} className="grid grid-cols-1">
                {index !== 0 && <hr />}
                <div className="timeline-middle">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
                <div
                  className={`my-3 border-none crypto-shadow timeline-end timeline-box w-full max-w-sm flex flex-col items-center justify-center min-w-[20rem]`}
                >
                  <div className="w-full px-4 py-3">
                    <p className="text-xl">{item}</p>
                  </div>
                </div>
                {index !== 3 && <hr />}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Stats container */}
      <div className="container flex flex-col items-center justify-center mx-auto mt-28">
        <HeroScrollDemo />
      </div>

      {/* Properties for everyone container */}
      <div className="container flex flex-col items-center justify-center mx-auto mb-28">
        <div className="flex flex-col mb-4 text-center gap-y-0">
          <p className="text-4xl font-bold">Properties for Everyone's Budget</p>
          {/* Sub heading container */}
          <div className="flex flex-col items-center justify-center my-4">
            <p className="text-md">Show prices in</p>
            <div className="mt-2">
              <PriceBar
                tabs={["USD", "SOL", "ETH"]}
                setCurrency={setCurrency}
              />
            </div>
          </div>
        </div>

        {/* Cards container */}
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {[
            {
              price: 28,
              shares: 1566,
              title: "As low as,",
            },
            {
              price: 89,
              shares: 9455,
              title: "Average of,",
            },
            {
              price: 163,
              shares: 566,
              title: "As high as,",
            },
          ].map((_, index) => (
            <div
              key={index}
              className="flex flex-col items-center p-6 px-12 gap-y-3 rounded-3xl bg-black/10"
            >
              <p className="text-2xl">{_.title}</p>
              <div className="leading-none">
                <p className="text-6xl font-bold">
                  {currency === "USD" ? (
                    "$" + _.price
                  ) : currency === "SOL" ? (
                    <>
                      {(_.price * 0.999).toFixed(2)}
                      <span className="text-sm">&nbsp;SOL</span>
                    </>
                  ) : (
                    <>
                      {(_.price * 0.00037).toFixed(2)}
                      <span className="text-sm">&nbsp;ETH</span>
                    </>
                  )}
                </p>
                <p className="text-lg">per share</p>
              </div>
              <div className="flex flex-col mt-2 gap-y-0">
                <p className="text-3xl">
                  {_.shares.toLocaleString("en-US")}{" "}
                  <span className="text-md">Shares</span>
                </p>
                <p className="text-md">Shares Available</p>
              </div>
              <button
                className="p-2 px-8 py-3 mt-3 text-white bg-black border-2 rounded-full hover:bg-white hover:border-black hover:text-black"
                onClick={() => {
                  navigate("/dashboard");
                }}
              >
                Invest Now
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Ask doubts container */}
      {/* <div className="container flex flex-col items-center justify-center px-6 mx-auto mb-44 my-28">
        <CustomLamp />
      </div> */}

      {/* Build wealth container */}
      <div className="px-4 pb-32">
        <div className="container flex flex-col items-center justify-center w-full px-4 py-12 mx-auto bg-black rounded-3xl my-28 gap-y-3">
          <div className="flex flex-col text-center">
            <p className="text-2xl font-bold text-white lg:text-3xl">
              Start building wealth from today
            </p>
            <p className="text-lg text-white">
              Real estate shares are the key to building lasting wealth. Begin
              your journey with us now.
            </p>
          </div>
          <button
            className="p-2 px-16 py-3 mt-3 text-black bg-white border-2 rounded-full hover:bg-black hover:border-white hover:text-white"
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Get Started
          </button>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
