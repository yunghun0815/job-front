export const JOB_API_URL = getEnv('JOB_API_URL');


function getEnv(key : string) {

    const value = process.env[key];

    if (value) {
        return value;
    }

    throw new Error(`Environment variable ${key} is not set.`);
}