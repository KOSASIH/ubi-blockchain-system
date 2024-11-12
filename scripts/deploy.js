import { ethers } from 'ethers';
import dotenv from 'dotenv';
import fs from 'fs';
import path from 'path';

dotenv.config();

const deployContract = async () => {
  // Load the contract's ABI and bytecode
  const contractPath = path.join(__dirname, '../artifacts/contracts/UBI.sol/UBI.json');
  const contractJson = JSON.parse(fs.readFileSync(contractPath, 'utf8'));
  const abi = contractJson.abi;
  const bytecode = contractJson.bytecode;

  // Connect to the Ethereum network
  const provider = new ethers.providers.JsonRpcProvider(process.env.INFURA_URL);
  const wallet = new ethers.Wallet(process.env.PRIVATE_KEY, provider);

  // Create a contract factory
  const contractFactory = new ethers.ContractFactory(abi, bytecode, wallet);

  console.log('Deploying contract...');

  // Deploy the contract
  const contract = await contractFactory.deploy();
  await contract.deployed();

  console.log(`Contract deployed at address: ${contract.address}`);
};

deployContract().catch((error) => {
  console.error('Error deploying contract:', error);
  process.exit(1);
});
