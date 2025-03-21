import sql from 'mssql';
import { EnvConfig } from './dotenv.js';

let pool; // Variable para mantener la conexión activa

export const getConnection = async () => {
  try {
      if (!pool) {  // Si no hay conexión activa, crearla
          pool = await sql.connect(`Server=tcp:${EnvConfig.Server},${EnvConfig.dbport};Database=${EnvConfig.Database};Uid=${EnvConfig.Uid};Pwd=${EnvConfig.Pwd};Encrypt=yes;`);
          console.log("✅ Database Connected");
      }
      return pool;
  } catch (err) {
      console.error("❌ Database Connection Error:", err);
      throw new Error("Error connecting to database");
  }
};

export { sql };