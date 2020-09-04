const express = require('express');

const app = express();

app.use('/product', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Product page</h1>');
});

app.use('/', (req, res, next) => {
    console.log('In another middleware');
    res.send('<h1>Hello from express!</h1>');
});

app.use(ignoreFavicon);
app.use(ignoreAmazon);

app.listen(3000);

function ignoreFavicon(req, res, next) {
    if (req.originalUrl === '/favicon.ico') {
        res.status(204).json({nope: true});
    } else {
        next();
    }
}

function ignoreAmazon(req, res, next) {
    if (req.originalUrl.includes('s3.amazonaws.com')) {
        res.status(204).json({nope: true});
    } else {
        next();
    }
}