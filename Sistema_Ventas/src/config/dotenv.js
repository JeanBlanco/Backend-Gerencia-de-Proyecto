
const  {
    NODE_ENV: env = 'dev',
    PORT: port = 3000,
    DB_USER: Uid,
    DB_PASSWORD: Pwd,
    DATABASE: Database,
    DB_PORT: dbport = 1433,
    DATABASE_SERVER: Server,
    SECRET_KEY: secretKey
} = process.env

export const EnvConfig = { env, port, Uid, Pwd, Database, dbport, Server, secretKey }