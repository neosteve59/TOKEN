import React from 'react';
import TokenList from '../components/TokenList';
import useTokens from '../hooks/useTokens';

const Dashboard: React.FC = () => {
    const { tokens, loading, error } = useTokens();

    return (
        <div className="dashboard">
            <h1 className="text-2xl font-bold mb-4">Token Tracker Dashboard</h1>
            {loading && <p>Loading tokens...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && <TokenList tokens={tokens} />}
        </div>
    );
};

export default Dashboard;