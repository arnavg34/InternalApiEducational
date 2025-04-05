import express from 'express';
import userRoutes from './routes/userRoutes';
import { errorHandler } from './middlewares/errorHandler';
import path from 'path';
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));
const distPath = path.resolve(__dirname.includes('dist') ? __dirname : path.join(__dirname, '..', 'dist'));
app.use('/dist', express.static(distPath));

// Routes
app.use('/api/users', userRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;