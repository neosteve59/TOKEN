import { Token } from '../models/tokenModel';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const getAllTokens = async (): Promise<Token[]> => {
    return await prisma.token.findMany();
};

export const getTokenById = async (id: string): Promise<Token | null> => {
    return await prisma.token.findUnique({
        where: { id },
    });
};

export const createToken = async (data: Omit<Token, 'id'>): Promise<Token> => {
    return await prisma.token.create({
        data,
    });
};

export const updateToken = async (id: string, data: Partial<Token>): Promise<Token | null> => {
    return await prisma.token.update({
        where: { id },
        data,
    });
};

export const deleteToken = async (id: string): Promise<Token | null> => {
    return await prisma.token.delete({
        where: { id },
    });
};