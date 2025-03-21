import { EnvConfig } from '../config/dotenv.js';
import jwt from "jsonwebtoken";

export const generarJWT = ( id = '' ) => {

    return new Promise( (resolve, reject) => {

        const payload = { id }

        jwt.sign( payload, EnvConfig.secretKey, {
           expiresIn: '8h' 
        }, (err, token) => {
            if ( err ) {
                console.log(err);
                reject( 'I cannot generate the token' )
            }else{
                resolve( token )
            }
        })
    })
}
