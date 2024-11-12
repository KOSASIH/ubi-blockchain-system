import React from 'react';
import ClaimUBI from '../components/ClaimUBI';
import TransactionHistory from '../components/TransactionHistory';
import Governance from '../components/Governance';

const Home = () => {
  return (
    <div>
      <h2>Welcome to the UBI Blockchain System</h2>
      <ClaimUBI />
      <TransactionHistory />
      <Governance />
    </div>
  );
};

export default Home;
