module.exports = function(app) {

    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); // load our public/index.html file
    });

    app.get('/contact', function(req,res) {
      res.sendfile('../public/views/contact.html');
    });

    app.get('/portfolio', function(req,res) {
      res.sendfile('../public/views/portfolio.html');
    });
};
