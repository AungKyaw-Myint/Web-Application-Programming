const express = require('express');
const path = require('path');
const app = express();
const jsonParser = express.json();
const urlencodedParser = express.urlencoded({ extended: false });

app.use(express.static(__dirname));

app.listen(3000, () => {
    console.log('Your Server is running on 3000');
});

app.get('/', (req, res, next) => {
    console.log("Hello World");
    res.sendFile(path.join(__dirname, 'home.html'));
});
app.get('/user', (req, res, next) => {
    console.log("User");
    res.sendFile(path.join(__dirname, 'user.html'));
});

app.post('/product',urlencodedParser, (req, res, next) => {
    console.log('product!');
    console.log('product!',req.body.firstname);
    res.sendFile(path.join(__dirname, 'product.html'));
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=<device-width>, initial-scale=1.0">
        <title>Document</title>
    </head>
    <body>
        <h1> This is Product Page</h1>
        <label> Firstname: </label>${req.body.firstname} <br> <br>  
          
        <label> Middlename: </label> ${req.body.middlename}<br> <br>
        <label> Lastname: </label>${req.body.lastname}     <br> <br>
    </body>
    </html>`);
});

app.use(( req, res, next) =>{
    console.log('404!');
    res.status(404).send('404 Not found!');
});

app.use(function (err, req, res, next) {
    res.status(500).send('Error');
});