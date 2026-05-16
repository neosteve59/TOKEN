import React from 'react';
import { Token } from '../types';

interface TokenCardProps {
    token: Token;
    key?: React.Key;
}

const TokenCard: React.FC<TokenCardProps> = ({ token }) => {
    const { name, symbol, price, marketCap, volume } = token;
    return (
        <div className="bg-white shadow-md rounded-lg p-4 m-2">
            <h2 className="text-xl font-bold">{name} ({symbol})</h2>
            <p className="text-gray-700">Price: ${price.toFixed(2)}</p>
            <p className="text-gray-700">Market Cap: ${marketCap.toLocaleString()}</p>
            <p className="text-gray-700">24h Volume: ${volume.toLocaleString()}</p>
        </div>
    );
};

export default TokenCard;