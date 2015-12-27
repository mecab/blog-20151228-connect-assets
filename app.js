var path = require('path');
var express = require('express');
var swig = require('swig');
var neat = require('node-neat'); 

var app = new express();
app.listen(3000, function(err) {
    console.log("Express is runnning on port 3000");
});
app.engine('html', swig.renderFile);
app.set('view engine', 'html');
app.set('views', path.join(__dirname, 'views'));
app.set('view cache', false);
swig.setDefaults({ cache: false });

var includePaths = neat.with([
    'assets/css',
    'assets/js'
]);

app.use(require('connect-assets')({
    paths: includePaths,
    precompile: ["style.css", "main.js"]
}));

app.get('/', (req, res) => {
    res.render('index.html');
});
