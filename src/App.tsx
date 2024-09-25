import {
  BrowserRouter as Router,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import { useMemo } from "react";
import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {
  PhantomWalletAdapter,
  UnsafeBurnerWalletAdapter,
} from "@solana/wallet-adapter-wallets";
import { WalletModalProvider } from "@solana/wallet-adapter-react-ui";
import { clusterApiUrl } from "@solana/web3.js";
import "@solana/wallet-adapter-react-ui/styles.css";
import { Toaster } from "react-hot-toast";

import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Home from "./pages/Home";
import AuthMiddleware from "./components/custom/auth/AuthMiddleware";
import Navbar from "./components/custom/Navbar";
import AboutUs from "./pages/AboutUs";
import AllProperties from "./components/custom/dashboard/pages/AllProperties";
import Launchpad from "./components/custom/dashboard/pages/Launchpad";
import Trade from "./components/custom/dashboard/pages/Trade";
import Portfolio from "./components/custom/dashboard/pages/Portfolio";
import History from "./components/custom/dashboard/pages/History";
import PropertyView from "./pages/PropertyView";
import Dummy from "./pages/admin-only/basic/Dummy";
import CandyMachine from "./pages/admin-only/candy-machine/CandyMachine";

function App() {
  // The network can be set to 'devnet', 'testnet', or 'mainnet-beta'.
  const network = WalletAdapterNetwork.Devnet;
  const location = useLocation();

  // You can also provide a custom RPC endpoint.
  // const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  // const endpoint = useMemo(
  //   () =>
  //     "https://ultra-palpable-orb.solana-mainnet.quiknode.pro/cf7a9deeca1bfe468aacb99226beaa660f6355cb",
  //   []
  // );
  const endpoint = useMemo(
    () =>
      "https://aged-soft-brook.solana-devnet.quiknode.pro/0c543ce79041ea51479a8e6722d56474da57db2a",
    []
  );

  console.log("endpoint", endpoint);

  const wallets = useMemo(
    () => [],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [network]
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <Toaster />
          {
            // Navbar component
            location.pathname.includes("/dashboard") ? null : <Navbar />
          }
          <div className="">
            {/* Main content area with padding-top to accommodate the Navbar height */}
            <Routes>
              {/* Public Routes */}
              <Route path="/" element={<Home />} />
              <Route path="/about-us" element={<AboutUs />} />
              {/* <Route path="/dashboard" element={<Dashboard />} /> */}

              {/* Private Route with Guard for Dashboard */}
              <Route
                path="/dashboard"
                element={
                  <AuthMiddleware>
                    <Dashboard>
                      <AllProperties />
                    </Dashboard>
                  </AuthMiddleware>
                }
              />
              <Route
                path="/dashboard/launchpad"
                element={
                  <AuthMiddleware>
                    <Dashboard>
                      <Launchpad />
                    </Dashboard>
                  </AuthMiddleware>
                }
              />
              <Route
                path="/dashboard/trade"
                element={
                  <AuthMiddleware>
                    <Dashboard>
                      <Trade />
                    </Dashboard>
                  </AuthMiddleware>
                }
              />
              <Route
                path="/dashboard/portfolio"
                element={
                  <AuthMiddleware>
                    <Dashboard>
                      <Portfolio />
                    </Dashboard>
                  </AuthMiddleware>
                }
              />
              <Route
                path="/dashboard/history"
                element={
                  <AuthMiddleware>
                    <Dashboard>
                      <History />
                    </Dashboard>
                  </AuthMiddleware>
                }
              />

              <Route path="/property/view/:id" element={<PropertyView />} />
              <Route path="/dummy" element={<Dummy />} />
              <Route path="/candy-machine" element={<CandyMachine />} />
            </Routes>
          </div>
          {/* <WalletMultiButton /> */}
          {/* <WalletDisconnectButton /> */}
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}

export default App;
