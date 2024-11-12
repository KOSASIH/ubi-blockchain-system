import React, { useState } from 'react';
import { createProposal } from '../services/governanceService';

const Governance = () => {
  const [description, setDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      await createProposal(description);
      alert('Proposal created successfully!');
      setDescription('');
    } catch (err) {
      setError('Failed to create proposal. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h3>Create a Governance Proposal</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Proposal description"
          required
        />
        <button type="submit" disabled={loading}>
          {loading ? 'Creating...' : 'Create Proposal'}
        </button>
        {error && <p style={{ color: 'red' }}>{error}</p>}
      </form>
    </div>
  );
};

export default Governance;
