const express = require('express');
const app = express();

app.set('view engine', 'ejs')

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/script'));


app.get('/', (req, res) => {
    res.render('index');
})

app.all('*', (req, res) => {
    res.redirect('/');
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port 3000");
})