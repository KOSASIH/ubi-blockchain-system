import Web3 from 'web3';
import GovernanceContract from '../abis/Governance.json';

const web3 = new Web3(window.ethereum);
const governanceAddress = 'YOUR_GOVERNANCE_CONTRACT_ADDRESS';
const governance = new web3.eth.Contract(GovernanceContract.abi, governanceAddress);

export const createProposal = async (description) => {
  const accounts = await web3.eth.getAccounts();
  await governance.methods.createProposal(description).send({ from: accounts[0] });
};
