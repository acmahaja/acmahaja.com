require('dotenv').config();

const express = require('express');
const app = express();

const axios = require('axios')

app.set('trust proxy', true)

const Discord = require('discord.js');
const client = new Discord.Client();

client.login(process.env.TOKEN)

const path = require('path')

app.set('view engine', 'ejs')

app.set('views', path.join(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on("message", msg => {
    if (msg.content === "ping") {
        msg.reply("pog");
    }
})


app.get('/', (req, res) => {
    res.render('pages/index');
})

app.use('*', (req, res) => {
    res.redirect('/');
})

app.listen(process.env.PORT || 3000, () => {
    console.log("Listening on port 3000");
})