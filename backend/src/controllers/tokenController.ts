import { Request, Response } from 'express';
import { TokenService } from '../services/tokenService';

export class TokenController {
    private tokenService: TokenService;

    constructor() {
        this.tokenService = new TokenService();
    }

    public async getTokens(req: Request, res: Response): Promise<void> {
        try {
            const tokens = await this.tokenService.fetchTokens();
            res.status(200).json(tokens);
        } catch (error) {
            res.status(500).json({ message: 'Error fetching tokens', error });
        }
    }

    public async getTokenById(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const token = await this.tokenService.fetchTokenById(id);
            if (token) {
                res.status(200).json(token);
            } else {
                res.status(404).json({ message: 'Token not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error fetching token', error });
        }
    }

    public async createToken(req: Request, res: Response): Promise<void> {
        const tokenData = req.body;
        try {
            const newToken = await this.tokenService.createToken(tokenData);
            res.status(201).json(newToken);
        } catch (error) {
            res.status(500).json({ message: 'Error creating token', error });
        }
    }

    public async updateToken(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        const tokenData = req.body;
        try {
            const updatedToken = await this.tokenService.updateToken(id, tokenData);
            if (updatedToken) {
                res.status(200).json(updatedToken);
            } else {
                res.status(404).json({ message: 'Token not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating token', error });
        }
    }

    public async deleteToken(req: Request, res: Response): Promise<void> {
        const { id } = req.params;
        try {
            const deleted = await this.tokenService.deleteToken(id);
            if (deleted) {
                res.status(204).send();
            } else {
                res.status(404).json({ message: 'Token not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting token', error });
        }
    }
}