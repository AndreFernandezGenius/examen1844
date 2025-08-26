import jwt from 'jsonwebtoken';
export const isUser = (req, res,next) => {

    const { authorization } = req.headers;
   console.log("en isUser ",typeof authorization,authorization)
    if (!authorization) {
            throw new Error("Falta cabeceira de autorización", 401);
    }

    // ESTA CONDICIÓN FAI A EQUIVALENCIA A ENTRAR NA BASE DE DATOS A SOLICITAR
    // O LOGUEO DO USUARIO

    
    let datoEnviadoEnErro = {resposta:"Usuario o contraseña incorrectos"}

    const desencriptoUser = jwt.verify(authorization,process.env.SEGREDO);

    console.log("desencriptoUser ",desencriptoUser)
    const {usuario, email} = desencriptoUser;

    let condicionUsuarioCorrecto = usuario == 'Andre' && email == 'andre@andre.com';

    if(condicionUsuarioCorrecto){       
        next()
    }else if(usuario === null || email === null || email === undefined || usuario === undefined){
        //throw new Error("Usuario o contraseña incorrectos", 403);
        res.send(datoEnviadoEnErro); 
    }
     
}