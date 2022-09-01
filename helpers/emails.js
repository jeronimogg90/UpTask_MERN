import nodemailer from 'nodemailer'

export const emailRegistro = async (datos) => {
    const { email, nombre, token} = datos

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
    });

    //Información del email

    const info = await transport.sendMail({
        from: '"UpTask - Administrador de proyectos " <cuentas@uptask.com>',
        to: email,
        subject: "UpTask - comprueba tu cuenta",
        text: "Comprueba tu cuenta en UpTask",
        html: 
        `<p>Hola: ${nombre} Comprueba tu cuenta en UpTask</p>
        <p>Tu cuenta ya esta casi lista, solo debes comprobarla enel siguiente enlace:

        <a href="${process.env.FRONTED_URL}/confirmar/${token}">Comprobar cuenta</a></p>

        <p>Si tu no creaste esta cuenta, puedes ignorar el mensaje </p>
        `
    })

    
}

export const emailOlvidePassword = async (datos) => {
    const { email, nombre, token} = datos

    const transport = nodemailer.createTransport({
        host: process.env.EMAIL_HOST,
        port: process.env.EMAIL_PORT,
        auth: {
          user: process.env.EMAIL_USER,
          pass: process.env.EMAIL_PASS
        }
    });

    //Información del email

    const info = await transport.sendMail({
        from: '"UpTask - Administrador de proyectos " <cuentas@uptask.com>',
        to: email,
        subject: "UpTask - restablece tu password",
        text: "Restablece tu password",
        html: 
        `<p>Hola: ${nombre} ha solicitado restablecer tu password</p>
        <p>Sigue el siguiente enlace para regenrar tu password:

        <a href="${process.env.FRONTED_URL}/olvide-password/${token}">Restablecer password</a></p>

        <p>Si tu no solicitaste este cambio, puedes ignorar el mensaje </p>
        `
    })

    
}