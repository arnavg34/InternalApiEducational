import express from 'express';
import itemRoutes from './routes/itemRoutes';
import { errorHandler } from './middlewares/errorHandler';
import path from 'path';
const app = express();

app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));
const distPath = path.resolve(__dirname.includes('dist') ? __dirname : path.join(__dirname, '..', 'dist'));
console.log('DIST FOLDER:', distPath)app.use('/dist', express.static(distPath));
// Routes
app.use('/api/items', itemRoutes);

// Global error handler (should be after routes)
app.use(errorHandler);

export default app;