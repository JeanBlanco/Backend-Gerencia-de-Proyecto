import bcryptjs from "bcryptjs";
import { request, response } from "express";
import { getConnection, sql } from "../config/db.js";
import jwt from "jsonwebtoken";
import { EnvConfig } from '../config/dotenv.js';


export const login = async (req = request, res = response) => {

    const {email, password} = req.body;

    try{
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('email', sql.VarChar, email)
            .query("SELECT id, username, email, password FROM dbo.Admin WHERE email = @email")

        if (result.recordset.length === 0) {
            return res.status(400).json({ msg: "User / Email not valid" });
        }

        const user = result.recordset[0];


        const validPassword = bcryptjs.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ msg: "Incorrect password" });
        }

        const token = jwt.sign(user.id, EnvConfig.secretKey);

        res
        .cookie("access_token", token, {
            httpOnly: true, // only accessible via HTTP
            secure: EnvConfig.env === "production", // only accessible via HTTPS
            sameSite: "strict", // only accessible via HTTPS
            maxAge: 1000 * 60 * 60 // 1 hora
        })
        .json({ user, token });
    } catch (err){
        console.error(err);
    }
}

    

