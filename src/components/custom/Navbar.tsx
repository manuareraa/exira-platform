import { useEffect, useState } from "react";
import {
  WalletMultiButton,
  WalletDisconnectButton,
} from "@solana/wallet-adapter-react-ui";
import { useConnection, useWallet } from "@solana/wallet-adapter-react";
import { useLocation, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";
import toast from "react-hot-toast";
import { DiscoverWalletProviders } from "./DiscoverWalletProviders";

function Navbar() {
  // State for managing mobile menu visibility
  const [menuOpen, setMenuOpen] = useState(false);

  // Access the connection and publicKey from the Solana wallet
  const { connection } = useConnection();
  const { publicKey } = useWallet();

  // Access location and navigate for routing
  const location = useLocation();
  const navigate = useNavigate();

  // Handle the navigation to the app
  const handleGoToApp = () => {
    if (connection && publicKey) {
      navigate("/dashboard");
    } else {
      toast.error("Please connect your wallet");
    }
  };

  // Handle navigation and close menu for mobile
  const handleNavigate = (path) => {
    navigate(path);
    setMenuOpen(false); // Close menu on selection
  };

  useEffect(() => {
    // init();
  }, []);

  return (
    <nav className="relative flex flex-wrap items-center justify-between w-full p-4 md:px-10 py-7">
      {/* Left container: Logo */}
      <div className="text-3xl font-black md:text-5xl">Exira</div>

      {/* Mobile menu button */}
      {/* Mobile menu button */}
      <div className="flex items-center md:hidden">
        <button
          className="btn btn-circle swap swap-rotate"
          onClick={() => {
            console.log("Menu clicked", menuOpen);
            setMenuOpen(!menuOpen);
          }}
        >
          {/* Hamburger icon */}
          {!menuOpen ? (
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
            </svg>
          ) : (
            /* Close icon */
            <svg
              className="fill-current"
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 512 512"
            >
              <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
            </svg>
          )}
        </button>
      </div>

      {/* Right container: Navigation and buttons */}
      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } flex-col md:flex md:flex-row items-center md:gap-4 absolute md:relative top-full left-0 w-full md:w-auto bg-white md:bg-transparent z-10 p-4 md:p-0 md:space-x-4`}
      >
        {/* Navigation links */}
        <div className="flex flex-col gap-4 md:flex-row md:gap-8 md:mr-6">
          {["Home", "About Us", "How it works?"].map((item, index) => (
            <p
              key={index}
              className={`text-base md:text-md hover:cursor-pointer hover:underline hover:underline-offset-2 ${
                location.pathname ===
                `/${item.toLowerCase().replace(/\s+/g, "-")}`
                  ? "underline font-bold"
                  : ""
              }`}
              onClick={() =>
                handleNavigate(`/${item.toLowerCase().replace(/\s+/g, "-")}`)
              }
            >
              {item}
            </p>
          ))}
        </div>

        {/* Wallet and App buttons */}
        <div className="flex flex-col items-center gap-4 mt-4 md:flex-row md:mt-0">
          {/* <WalletMultiButton
            // className="flex justify-center w-full px-4 py-2 text-sm text-white bg-black rounded-lg md:w-40"
            style={{
              backgroundColor: "black",
              padding: "1rem",
              height: "40px",
              // marginTop: "5px",
              fontSize: "15px",
              borderRadius: "10px",
            }}
          /> */}
          {/* <button
            className="flex items-center justify-center w-full h-10 px-6 py-2 text-black border-2 rounded-lg bg-gamma border-gamma md:w-auto"
            onClick={handleGoToApp}
          >
            <div className="flex items-center gap-2">
              <p>Connect Wallet</p>
            </div>
          </button> */}
          <DiscoverWalletProviders />

          {/* Conditionally render "Exira App" button */}
          {!location.pathname.includes("/dashboard") && (
            <button
              className="flex items-center justify-center w-full h-10 px-6 py-2 text-black border-2 rounded-lg bg-gamma border-gamma md:w-auto"
              onClick={handleGoToApp}
            >
              <div className="flex flex-row items-center justify-center gap-2">
                <p>Exira App</p>
                <FontAwesomeIcon icon={faChevronRight} size="2xs" />
              </div>
            </button>
          )}

          {/* Uncomment below to enable WalletDisconnectButton if needed */}
          {/* 
          {connection && publicKey ? (
            <WalletDisconnectButton className="px-4 py-2 mt-1 text-sm text-white bg-black rounded-lg" />
          ) : null} 
          */}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
