

export interface PgConfig {
    host: string;
    port: number;
    username: string;
    password: string;
    database: string;
}
export interface EnvSettings {
    isDev: boolean;
    isProd: boolean;
    pgConfig: PgConfig;
    appOrigin: string;
    prodOrigin: string;
    api: string;
    env: string;
    multerConfig: MulterConfig
    jwt:Jwt
}

export interface MulterConfig {
    dest: string;
    maxSize: string;
}
export interface Jwt {
    expireTime:string;
    secret:string;
}
