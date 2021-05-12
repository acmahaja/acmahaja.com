const express = require('express');
const app = express();

require('custom-env').env('staging')

var geoip = require('geoip-lite');


const Discord = require("discord.js")
const client = new Discord.Client()

app.set('trust proxy', true);


const path = require('path')

app.set('view engine', 'ejs')
app.set('trust proxy', true);

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.use(express.static(__dirname + '/script'));

client.login(process.env.TOKEN)

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`)
    client.channels.cache.get(process.env.SERVER).send("Discord bot is ready on www.acmahaja.com")
})

client.on("message", msg => {
    if (msg.content === "ping") {
        msg.reply("pong");

    }
})


app.use(function(req, res, next) {
    var ip = req.ip;
    var geo = geoip.lookup(ip);

    //var geo = geoip.lookup(req.ip);
    //console.log(geo);
    client.channels.cache.get(process.env.SERVER).send(`You have a vistor! on www.acmahaja.com @ ${new Date().toString()} w/ @ ${geo.city}, ${geo.region},${geo.country}`);
    next()
})


app.get('/', (req, res) => {
    res.render('pages/index');
})

app.all('*', (req, res) => {
    res.redirect('/');
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port 3000");
})