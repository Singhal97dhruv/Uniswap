import React from "react";
import toast from "react-hot-toast";
const Networks = ({ setActiveComponent, activeNetwork, setActiveNetwork }) => {

  //Notification message
  const notifySuccess=(msg)=>toast.success(msg,{duration: 2000})

  //Network Lists
  const networks = [
    {
      name: "Ethereum",
      rpcUrl: "https://rpc.ankr.com/eth",
      logo: "assets/images/polygon.png"
    },
    {
      name: "Polygon",
      rpcUrl: "https://rpc.ankr.com/polygon",
      logo: "assets/images/polygon.png"
    },
    {
      name: "Optimism",
      rpcUrl: "https://rpc.ankr.com/optimism",
      logo: "assets/images/optimism.png"
    },
    {
      name: "Arbitrum",
      rpcUrl: "https://rpc.ankr.com/arbitrum",
      logo: "assets/images/arbitrum.png"
    },
    {
      name: "Avalanche",
      rpcUrl: "https://rpc.ankr.com/avalanche",
      logo: "assets/images/avalanche.png"
    },
    {
      name: "Base",
      rpcUrl: "https://rpc.ankr.com/base",
      logo: "assets/images/base.png"
    },
    {
      name: "Polygon Mumbai",
      rpcUrl: "https://rpc.ankr.com/polygon_mumbai",
      logo: "assets/images/polygon.png"
    },

    {
      name: "Sepolia",
      rpcUrl: "https://rpc.ankr.com/eth_sepolia",
      logo: "assets/images/ethereum.png"
    },
    {
      name: "Goerli",
      rpcUrl: "https://rpc.ankr.com/eth_goerli",
      logo: "assets/images/ethereum.png"
    },
  ];

  const selectNetwork = (network) => {
    // setActiveComponent("Networks");
    setActiveNetwork(network.name);
    localStorage.setItem("activeNetwork", JSON.stringify(network));
    notifySuccess(`${network.name} selected`);
  };
  return (
    <section id="generator" className="py-14">
      <div className="container z-10">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6 py-20">
          {
            networks?.map((network, index) => (
              <div key={index + 1} onClick={(e) => {
                e.preventDefault();
                selectNetwork(network)
              }}>
                <div className={`group p-8 rounded-xl bg-default-950/40 transition-all duration-500 hover:-translate-y-2 hover:bg-primary/40 ${activeNetwork == network.name ? "bg-primary/40" : ""}`}>
                  <div className="h-14 w-14 flex items-center justify-center rounded-lg bg-primary text-primary group-hover:bg-white/20 group-hover:text-white">
                    <img src={network.logo} className="h-10" alt="" />
                  </div>

                  <h3 className="text-xl font-medium text-default-200 mt-8">
                    {network.name}
                  </h3>
                  <p className="text-base font-normal text-default-300 mt-4">
                    By Utilizing the selected network <strong>{network.name}</strong>, you can able to find and get access of details for getting the pool address and liquidity
                  </p>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </section>
  )

  return <div>Networks</div>;
};

export default Networks;
