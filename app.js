const express = require('express');
const app = express();

require('custom-env').env('staging')

app.set('trust proxy', true);


const path = require('path')

app.set('view engine', 'ejs')
app.set('trust proxy', true);

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/script'));

app.get('/', (req, res) => {

    res.render('pages/index');
})

app.all('*', (req, res) => {
    res.redirect('/');
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port 3000");
})