const { authCookieName } = require('../app-config');
const utils = require('../utils');

async function addUserData(req, res, next) {
    const token = req.cookies[authCookieName];

    if (token) {
        try {
          
            const decodedToken = await utils.jwt.verifyToken(token);
            req.user = decodedToken;
        } catch (error) {
            next(error);
        }
    }
    next();
}

module.exports = { addUserData };
