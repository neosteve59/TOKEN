import express from 'express';
import { json } from 'body-parser';
import tokenRoutes from './routes/tokenRoutes';
import { logger } from './utils/logger';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(json());
app.use('/api/tokens', tokenRoutes);

app.listen(PORT, () => {
    logger.info(`Server is running on http://localhost:${PORT}`);
});