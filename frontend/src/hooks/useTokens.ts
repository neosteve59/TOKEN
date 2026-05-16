import { useEffect, useState } from 'react';
import { fetchTokens } from '../services/api';
import { Token } from '../types';

const useTokens = () => {
    const [tokens, setTokens] = useState<Token[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const loadTokens = async () => {
            try {
                const data = await fetchTokens();
                setTokens(data);
            } catch (err) {
                setError('Failed to fetch tokens');
            } finally {
                setLoading(false);
            }
        };

        loadTokens();
    }, []);

    return { tokens, loading, error };
};

export default useTokens;