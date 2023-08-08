const env = process.env.NODE_ENV || 'development';

const config = {
    development: {
        port: process.env.PORT || 3000,
        dbURL: 'mongodb://127.0.0.1:27017/TripTogether',
        origin: ['http://localhost:5555', 'http://localhost:4200']
    },
    production: {
        port: process.env.PORT || 3000,
        dbURL: process.env.DB_URL_CREDENTIALS,
        origin: []
    }
};

module.exports = config[env];

//mongoAtlas -- mongodb+srv://toshko:toshko12345@cluster0.v7dgwod.mongodb.net/?retryWrites=true&w=majority
// mongoCompass -- mongodb://127.0.0.1:27017/TripTogether