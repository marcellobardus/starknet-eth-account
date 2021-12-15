import { HardhatUserConfig } from "hardhat/config";
import "@shardlabs/starknet-hardhat-plugin";

const config: HardhatUserConfig = {
  cairo: {
    version: "0.6.2"
  },
  networks: {
    starknet_devnet: {
      url: "http://localhost:5000"
    }
  },
  mocha: {
    timeout: 99999999999,
    starknetNetwork: "starknet_devnet"
  }
};

export default config;
