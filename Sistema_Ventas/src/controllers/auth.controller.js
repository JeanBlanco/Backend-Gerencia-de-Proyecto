import bcryptjs from "bcryptjs";
import { request, response } from "express";
import { getConnection, sql } from "../config/db.js";

export const login = async (req = request, res = response) => {

    const {email, password} = req.body;

    try{
        const pool = await getConnection();
        const result = await pool
            .request()
            .input('email', sql.VarChar, email)
            .query("SELECT username, email, password FROM dbo.Admin WHERE email = @email")

        if (result.recordset.length === 0) {
            return res.status(400).json({ msg: "User / Email not valid" });
        }

        const user = result.recordset[0];

        const validPassword = bcryptjs.compareSync(password, user.password);
        if (!validPassword) {
            return res.status(400).json({ msg: "Incorrect password" });
        }

        res.json({ user });
    } catch (err){
        console.error(err);
    }
}

    

