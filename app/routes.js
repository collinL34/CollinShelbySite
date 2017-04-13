const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: "Outlook365",
    auth: {
        user: process.env.GOOGLE,
        pass: process.env.GOOGLE_PASS
    }
});

module.exports = function(app) {

    app.get('*', function(req, res) {
        res.sendfile('./public/index.html');
    });

    app.get('/contact', function(req, res) {
        res.sendfile('../public/views/contact.html');
    });

    app.get('/portfolio', function(req, res) {
        res.sendfile('../public/views/portfolio.html');
    });

    app.post('/contact-email', function(req, res) {

        transporter.sendMail({
            from: req.body.sender + " <s.shivasurya@gmail.com>",
            to: "Collin Shelby <collinlshelby@gmail.com>",
            subject: req.body.name + ', ' + req.body.subject,
            text: req.body.message
        }, function(error, response) {
            if (error) {
                console.log(error);
            } else {
                console.log("Mail sent: " + req.body.message);
            }
        });

    });
};
