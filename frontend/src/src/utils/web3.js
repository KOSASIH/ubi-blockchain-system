import Web3 from 'web3';

// Initialize Web3 instance
let web3;

// Function to connect to the user's wallet
export const connectWallet = async () => {
    if (window.ethereum) {
        try {
            // Request account access
            const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
            web3 = new Web3(window.ethereum);
            console.log('Connected to wallet:', accounts[0]);
            return accounts[0]; // Return the connected account
        } catch (error) {
            console.error('User  denied account access or error occurred:', error);
            throw new Error('Could not connect to wallet. Please try again.');
        }
    } else {
        alert('Please install MetaMask to use this feature.');
        throw new Error('MetaMask not installed');
    }
};

// Function to get the current account
export const getCurrentAccount = async () => {
    if (!web3) {
        throw new Error('Web3 is not initialized. Please connect your wallet first.');
    }
    const accounts = await web3.eth.getAccounts();
    return accounts[0]; // Return the first account
};

// Function to send a transaction
export const sendTransaction = async (to, value) => {
    if (!web3) {
        throw new Error('Web3 is not initialized. Please connect your wallet first.');
    }
    const from = await getCurrentAccount();
    const transactionParameters = {
        to: to,
        from: from,
        value: web3.utils.toHex(web3.utils.toWei(value, 'ether')),
    };

    try {
        const txHash = await web3.eth.sendTransaction(transactionParameters);
        console.log('Transaction successful with hash:', txHash);
        return txHash; // Return the transaction hash
    } catch (error) {
        console.error('Transaction failed:', error);
        throw new Error('Transaction failed. Please try again.');
    }
};

// Function to listen for events from a smart contract
export const listenToEvents = (contract, eventName) => {
    if (!contract) {
        throw new Error('Contract is not defined. Please provide a valid contract instance.');
    }

    contract.events[eventName]({
        filter: {}, // You can specify filters here
        fromBlock: 'latest'
    })
    .on('data', event => {
        console.log('Event received:', event);
    })
    .on('error', error => {
        console.error('Error listening to events:', error);
    });
};

// Function to get the network ID
export const getNetworkId = async () => {
    if (!web3) {
        throw new Error('Web3 is not initialized. Please connect your wallet first.');
    }
    const networkId = await web3.eth.net.getId();
    return networkId; // Return the network ID
};

// Export the web3 instance for use in other modules
export const getWeb3Instance = () => {
    if (!web3) {
        throw new Error('Web3 is not initialized. Please connect your wallet first.');
    }
    return web3;
};
