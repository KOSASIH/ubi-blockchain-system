import React, { useEffect, useState } from 'react';
import { getTransactionHistory } from '../services/ubiService';

const TransactionHistory = () => {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransactions = async () => {
      const data = await getTransactionHistory();
      setTransactions(data);
    };
    fetchTransactions();
  }, []);

  return (
    <div>
      <h3>Your Transaction History</h3>
      <ul>
        {transactions.map((tx, index) => (
          <li key={index}>
            {tx.date}: {tx.amount} UBI
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TransactionHistory;
