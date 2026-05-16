export interface Token {
    id: string;
    name: string;
    symbol: string;
    totalSupply: number;
    currentPrice: number;
    marketCap: number;
    createdAt: Date;
    updatedAt: Date;
}