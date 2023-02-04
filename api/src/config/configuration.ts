import { EnvSettings } from './interfaces';

export default (): EnvSettings => {
    console.log(process.env.PG_PORT)
    const env = process.env;
    const isProd = env.APP_ENV === 'PROD' || env.APP_ENV === 'PRD';
    const isDev = env.APP_ENV === 'DEV';
    return <EnvSettings>{
        appOrigin: isDev ? env.APP_ORIGIN_DEV : env.APP_ORIGIN_PROD,
        api: isDev ? env.API_DEV : env.API_PROD,
        env: env.APP_ENV,
        isDev,
        isProd,
        pgConfig: {
            host: env.PG_HOST,
            port: +env.PG_PORT,
            username: env.PG_USERNAME,
            password: env.PG_PASSWORD,
            database: env.PG_DATABASE,
        }
    }
};
