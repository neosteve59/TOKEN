import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000/api'; // Adjust the base URL as needed

export const fetchTokens = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tokens`);
        return response.data;
    } catch (error) {
        console.error('Error fetching tokens:', error);
        throw error;
    }
};

export const fetchTokenById = async (id: string) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/tokens/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Error fetching token with id ${id}:`, error);
        throw error;
    }
};

export const createToken = async (tokenData: any) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/tokens`, tokenData);
        return response.data;
    } catch (error) {
        console.error('Error creating token:', error);
        throw error;
    }
};

export const updateToken = async (id: string, tokenData: any) => {
    try {
        const response = await axios.put(`${API_BASE_URL}/tokens/${id}`, tokenData);
        return response.data;
    } catch (error) {
        console.error(`Error updating token with id ${id}:`, error);
        throw error;
    }
};

export const deleteToken = async (id: string) => {
    try {
        await axios.delete(`${API_BASE_URL}/tokens/${id}`);
    } catch (error) {
        console.error(`Error deleting token with id ${id}:`, error);
        throw error;
    }
};