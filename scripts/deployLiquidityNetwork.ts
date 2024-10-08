import { ethers } from "hardhat";

async function main() {

  const selfCompounderAddress = "0xad58D1DF63AFcf090Cc930475db3dD3cD8f739eA";
  const gelatoAutomateAddress = "0x527a819db1eb0e34426297b03bae11F2f8B3A19E";
  const nonfungiblePositionManagerAddress = "0xC36442b4a4522E871399CD717aBDD847Ab11FE88";
  const uniswapRouterAddress = "0x68b3465833fb72A70ecDF485E0e4C7bD8665Fc45";

  // Deploy DCA Liqudity Network
  const DCALiquidityNetwork = await ethers.getContractFactory("DCALiquidityNetwork");
  const dcaNet = await DCALiquidityNetwork.deploy(
    selfCompounderAddress,
    gelatoAutomateAddress,
    nonfungiblePositionManagerAddress,
    uniswapRouterAddress
  );

  console.log("DCA Liquidity Network deployed to:", dcaNet.address);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
