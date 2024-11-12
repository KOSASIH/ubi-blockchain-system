import React, { useState } from 'react';
import { claimUBI } from '../services/ubiService';

const ClaimUBI = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleClaim = async () => {
    setLoading(true);
    setError(null);
    try {
      await claimUBI();
      alert('UBI claimed successfully!');
    } catch (err) {
      setError('Failed to claim UBI. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Claim Your UBI</h3>
      <button onClick={handleClaim} disabled={loading}>
        {loading ? 'Claiming...' : 'Claim UBI'}
      </button>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ClaimUBI;
