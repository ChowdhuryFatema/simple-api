const authMiddleware = (req, res, next) => {

    const authHeader = req.headers.authorization;

    if(!authHeader || authHeader !== 'Bearer mysecrettoken'){
        return res.status(401).send('Unauthorized');
    }
    next();
}

module.exports = authMiddleware;