const BASE_URL = process.env.NODE_ENV === "production"
    ? process.env.API_URL_PROD
    : process.env.API_URL_DEV;

export default BASE_URL || "";