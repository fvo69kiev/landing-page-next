const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
    const body = JSON.parse(req.body);

    const message = `
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Phone: ${body.phone}\r\n
    Message: ${body.message}
  `;

    const data = {
        to: 'fvo69kiev@gmail.com',
        from: 'fvo69@meta.ua',
        subject: `New message from ${body.name}`,
        text: message,
        html: message.replace(/\r\n/g, '<br />'),
    };

    try {
        await mail.send(data);

        res.status(200).json({ status: 'OK' });

    } catch (err) {
        console.log(err)
    }
};