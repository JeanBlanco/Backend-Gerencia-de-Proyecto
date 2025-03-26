import { request, response } from 'express';
import jwt from "jsonwebtoken";
import { EnvConfig } from '../config/dotenv';
import { getConnection, sql } from "../config/db.js";

const validarJWT = async (req = request, res = response, next) => {

    const token = req.header('x-token')

    if( !token ){
        return res.status(401).json({
            msg: ' No hay token en la petición'
        })
    }
    
    try {

        const { id } = jwt.verify(token, EnvConfig.secretKey);

        const pool = await getConnection();
        const result = await pool
            .request()
            .input('email', sql.VarChar, email)
            .query("SELECT username, email FROM dbo.Admin WHERE id = @id")
       
        //read user corresponding to uid
        const user = result.recordset[0];

        //validate exist user
        if( !user ){
            return res.status(401).json({
                msg: 'Token not valid - user removed from DB'
            })
        }

        req.user = user;
        next();

    } catch (error) {
        console.log(error);
        res.status(401).json({
            msg:'Token no válido'
        })
    }
}


module.exports = {
    validarJWT
}