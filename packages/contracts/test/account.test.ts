import { expect } from "chai";
import { starknet } from "hardhat";

describe("Account: Test", () => {
  describe("Deployment", () => {
    it("Should deploy", async () => {
      const accountFactory = await starknet.getContractFactory("Account");
      const contract = await accountFactory.deploy({ _public_key: 4343 });
    });
  });
});
