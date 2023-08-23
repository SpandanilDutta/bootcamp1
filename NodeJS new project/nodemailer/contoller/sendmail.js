const nodemailer = require("nodemailer");

const sendmail = async (req, res) => {
    let testAccount = await nodemailer.createTestAccount();


    let transporter = await nodemailer.createTransport({
        port: 465,
        auth: {
            user: 'amanda.weimann@ethereal.email',
            pass: 'PnZjmWJqhmcDa4NdqG'
        }
    });

    let info = await transporter.sendMail({
        from: '"Spandanil Dutta 👻" <foo@example.com>', // sender address
        to: "bar@example.com, baz@example.com", // list of receivers
        subject: "Hello ✔", // Subject line
        text: "Hello world?", // plain text body
        html: "<b>Hello world?</b>", // html body
    });

    console.log("Message sent: %s", info.messageId);

    res.json(info);
};

module.exports = sendmail;