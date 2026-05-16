export interface Token {
    id: string;
    name: string;
    symbol: string;
    price: number;
    marketCap: number;
    volume: number;
    changePercentage: number;
}

export interface TokenResponse {
    tokens: Token[];
    total: number;
}

export interface CreateTokenInput {
    name: string;
    symbol: string;
    price: number;
    marketCap: number;
    volume: number;
}

export interface UpdateTokenInput {
    id: string;
    name?: string;
    symbol?: string;
    price?: number;
    marketCap?: number;
    volume?: number;
}