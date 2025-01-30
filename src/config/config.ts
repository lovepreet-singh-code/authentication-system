import dotenvFlow from 'dotenv-flow'

dotenvFlow.config()

export default {
    // General
    ENV: process.env.ENV,
    PORT: process.env.PORT,
    SERVER_URL: process.env.SERVER_URL,

    // Frontend
    FRONTEND_URL: process.env.FRONTEND_URL,

    // Email Service
    EMAIL_SERVICE_API_KEY: process.env.EMAIL_SERVICE_API_KEY,

    // Database
    DATABASE_URL: process.env.DATABASE_URL,
}

// import dotenvFlow from 'dotenv-flow';

// dotenvFlow.config();

// interface AppConfig {
//     ENV: string | undefined;
//     PORT: string | undefined;
//     SERVER_URL: string | undefined;
//     FRONTEND_URL: string | undefined;
//     EMAIL_SERVICE_API_KEY: string | undefined;
//     DATABASE_URL: string | undefined;
// }

// const config: AppConfig = {
//     ENV: process.env.ENV,
//     PORT: process.env.PORT,
//     SERVER_URL: process.env.SERVER_URL,
//     FRONTEND_URL: process.env.FRONTEND_URL, // Must be defined in the .env file
//     EMAIL_SERVICE_API_KEY: process.env.EMAIL_SERVICE_API_KEY,
//     DATABASE_URL: process.env.DATABASE_URL,
// };

// export default config;


// interface Config {
//     ENV: string;
//     PORT: string;
//     SERVER_URL: string;
//     FRONTEND_URL: string;
//     EMAIL_SERVICE_API_KEY: string;
//     DATABASE_URL: string;
// }

// const config: Config = {
//     ENV: process.env.ENV || 'development',
//     PORT: process.env.PORT || '3000',
//     SERVER_URL: process.env.SERVER_URL || 'http://localhost:3000',
//     FRONTEND_URL: process.env.FRONTEND_URL || 'http://localhost:3000',
//     EMAIL_SERVICE_API_KEY: process.env.EMAIL_SERVICE_API_KEY || 're_TPzZRHFK_3faiN9CfzvK7ynQEy2wr1EgZ',
//     DATABASE_URL: process.env.DATABASE_URL || 'mongodb://localhost:27017/authentication-system',
// };

// export default config;
