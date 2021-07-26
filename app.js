const express = require('express');
const app = express();

//const puppeteer = require('puppeteer');


var path = require('path');

app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));


app.get('/', async(req, res) => {
    res.render('pages/index');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}`);
});