"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = exports.requireAuth = void 0;
const requireAuth = (req, res, next) => {
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
exports.requireAuth = requireAuth;
const errorHandler = (err, req, res, next) => {
    console.error(err);
    res.status(err.status || 500).json({
        message: err.message || 'Internal Server Error',
    });
};
exports.errorHandler = errorHandler;
