import nodemailer from 'nodemailer';
import { mylog } from './mylog.js';



export const sendmail = async (title = '(sans titre)', content='(sans contenu)') => {
    const transporter = nodemailer.createTransport({
        host: process.env.EMAIL_HOST_SERVER,
        port: process.env.EMAIL_SMTP_PORT,
        secure: true,
        auth: {
            user: process.env.EMAIL_FROM,
            pass: process.env.EMAIL_PWD
        }
    });

    const info = await transporter.sendMail({
        from: process.env.EMAIL_FROM,
        to: process.env.EMAIL_TO,
        subject: title,
        text: content,
        html: content
    });

    mylog("[MAIL] Message envoyé :", info.messageId);
}
