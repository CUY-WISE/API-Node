// Description: Configuration file for the API service.
export const DB_USER = process.env.DB_USER;
export const DB_PASSWORD = process.env.DB_PASSWORD;
export const DB_HOST = process.env.DB_HOST;
export const DB_NAME = process.env.DB_NAME;
export const DB_PORT = process.env.DB_PORT;
export const DB_SSL = process.env.DB_SSL === 'true';
export const PORT = process.env.PORT || 4001;