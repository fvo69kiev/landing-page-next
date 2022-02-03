const mail = require('@sendgrid/mail');

mail.setApiKey(process.env.SENDGRID_API_KEY);

export default async (req, res) => {
    const body = JSON.parse(req.body);

    const message = `    
    Phone: ${body.phone}\r\n   
  `;

    const data = {
        to: 'fvo69kiev@gmail.com',
        from: 'fvo69@meta.ua',
        subject: `New message from Customer`,
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