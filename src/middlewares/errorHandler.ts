import { Request, Response, NextFunction } from 'express';
import { AuthenticatedRequest } from "../controllers/userController";
export interface AppError extends Error {
  status?: number;
}
export const requireAuth = (req: AuthenticatedRequest, res: Response, next: NextFunction) => {
  const allowedPaths = ['/login/', '/signup/', '/signup', '/login'];
  const isStaticAsset = req.path.match(/\.(css|js|png|jpg|jpeg|gif|svg|ico)$/);
  const apiAllowed = req.path.startsWith('/api/users');
  
  if (allowedPaths.includes(req.path) || apiAllowed || isStaticAsset) {
    return next();
  }

  if (!req.session.userEmail) {
    console.log(`[AUTH] Unauthorized access to ${req.path}. Redirecting to /login/`);
    return res.redirect('/login/');
  }

  next();
};
export const errorHandler = (
  err: AppError,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err);
  res.status(err.status || 500).json({
    message: err.message || 'Internal Server Error',
  });
};