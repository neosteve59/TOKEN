export interface Token {
    id: string;
    name: string;
    symbol: string;
    price: number;
    marketCap: number;
    volume: number;
    changePercentage: number;
}

export interface TokenListResponse {
    tokens: Token[];
    total: number;
}

export interface TokenDetails {
    id: string;
    name: string;
    symbol: string;
    description: string;
    price: number;
    marketCap: number;
    volume: number;
    changePercentage: number;
    website: string;
}