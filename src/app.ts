import express from 'express';
import session from 'express-session';
import path from 'path';
import cors from 'cors';
import userRoutes from './routes/userRoutes';
import { errorHandler, requireAuth } from './middlewares/errorHandler';
import { AuthenticatedRequest } from './controllers/userController';

const app = express();

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(session({
  secret: 'your-secret-key',
  resave: false,
  saveUninitialized: false,
  cookie: {
    secure: false,
    httpOnly: true,
    sameSite: 'lax'
  }
}));
app.use(requireAuth);
app.get('/login/', (req: AuthenticatedRequest, res) => {

  res.sendFile(path.join(__dirname, 'static/login/index.html'));
});
app.get('/signup/', (req: AuthenticatedRequest, res) => {
  res.sendFile(path.join(__dirname, 'static/signup/index.html'));
});

app.get('/home/', (req: AuthenticatedRequest, res) => {
  res.sendFile(path.join(__dirname, 'static/home/index.html'));
});

app.get('/update/', (req: AuthenticatedRequest, res) => {
  res.sendFile(path.join(__dirname, 'static/update/index.html'));
});

app.get('/delete/', (req: AuthenticatedRequest, res) => {
  res.sendFile(path.join(__dirname, 'static/delete/index.html'));
});
app.use(express.json());
app.use(express.static(path.join(__dirname, 'static')));

const distPath = path.resolve(__dirname.includes('dist') ? __dirname : path.join(__dirname, '..', 'dist'));
app.use('/dist', express.static(distPath));

app.use('/api/users', userRoutes);


app.use(errorHandler);
export default app;



