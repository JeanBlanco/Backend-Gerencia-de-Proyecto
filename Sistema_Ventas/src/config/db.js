import sql from 'mssql';
import { EnvConfig } from './dotenv.js';

export const getConnection = async () => {
    try {
        const pool = await sql.connect(`Server=tcp:${EnvConfig.Server},${EnvConfig.dbport};Database=${EnvConfig.Database};Uid=${EnvConfig.Uid};Pwd=${EnvConfig.Pwd};Encrypt=yes;TrustServerCertificate=no;Connection Timeout=30`)
        //const result = await pool.request().query("SELECT TOP 1 * FROM SalesLT.ProductCategory"); //puedes prbar la conexion con este comando.
        //console.log(result)
        return pool;
      } catch (err) {
        console.error('Error:', err);
      } finally {
        sql.close();
    }
}