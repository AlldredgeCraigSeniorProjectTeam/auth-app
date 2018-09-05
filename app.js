const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 5000;

let app = express();

app.use(express.static(path.join(__dirname, 'public')))
    .set('view engine', 'ejs')
    .set('views', path.join(__dirname, 'views'))
    .listen(PORT, () => {console.log(`Listening on port ${PORT}`)});

app.get('/', (req, res) => {res.render('home/index')});