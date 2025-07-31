import nodemailer from 'nodemailer';

const mailSender = async ({ email, title, body, attachments = [] }) => {
    try {
        let transporter = nodemailer.createTransport({
            host: process.env.MAIL_HOST,
            port: 587,
            auth: {
                user: process.env.MAIL_USER,
                pass: process.env.MAIL_PASS,
            }
        });

        let info = await transporter.sendMail({
            from: `"LandingLabs - by Faizan" <${process.env.MAIL_USER}>`,
            to: email,
            subject: title,
            html: body,
            attachments,
        });

        console.log("Email sent:", info.messageId);
        return info;
    } catch (error) {
        console.error("Error while sending mail:", error.message);
        if (error?.response) {
            console.error("SMTP response:", error.response);
        }
    }
};

export default mailSender;
