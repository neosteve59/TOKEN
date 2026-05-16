export interface Token {
    id: string;
    name: string;
    symbol: string;
    totalSupply: number;
    price: number;
    marketCap: number;
    createdAt: Date;
    updatedAt: Date;
}