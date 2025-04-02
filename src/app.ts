import express from 'express';
import itemRoutes from './routes/itemRoutes';
import { errorHandler } from './middlewares/errorHandler';
import path from 'path';
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));
// Routes
app.use('/api/items', itemRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;