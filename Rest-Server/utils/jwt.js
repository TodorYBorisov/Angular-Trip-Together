const jwt = require('jsonwebtoken');
const secret = process.env.SECRET || '72f214600fe3fa3518c5f383f453d1b348b3a6fae7877865f07a626db820f3e3';

function createToken(data) {
    return jwt.sign(data, secret, { expiresIn: '1d' });
}

function verifyToken(token) {
    return new Promise((resolve, reject) => {
        jwt.verify(token, secret, (err, data) => {
            if (err) {
                reject(err);
                return;
            }
            resolve(data);
        });
    });
} 

module.exports = {
    createToken,
    verifyToken
};

// За secret => Изпълнява се в терминала и генерира 64 bit ASCII string
// node -e "console.log(require('crypto').randomBytes(32).toString('hex'))"