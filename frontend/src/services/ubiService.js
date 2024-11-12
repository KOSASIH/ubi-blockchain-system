import Web3 from 'web3';
import UBIContract from '../abis/UBI.json';

const web3 = new Web3(window.ethereum);
const ubiAddress = 'YOUR_UBI_CONTRACT_ADDRESS';
const ubi = new web3.eth.Contract(UBIContract.abi, ubiAddress);

export const claimUBI = async () => {
  const accounts = await web3.eth.getAccounts();
  await ubi.methods.claimUBI().send({ from: accounts[0] });
};

export const getTransactionHistory = async () => {
  // Fetch transaction history logic here
  return [
    { date: '2023-01-01', amount: 100 },
    { date: '2023-02-01', amount: 100 },
  ];
};
