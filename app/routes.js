const nodemailer = require('nodemailer');
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'collinlshelby@gmail.com',
        pass: 'alpacin12'
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
        let mailOptions = {
            to: 'collinlshelby@gmail.com',
            from: 'Fred Foo 👻 <rawnchychero@comcast.net>',
            sender: req.body.sender,
            subject: req.body.subject,
            text: req.body.message
        };

        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message %s sent: %s', info.messageId, info.response);
        });
    });
};
