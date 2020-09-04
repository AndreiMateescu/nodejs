const express = require('express');
const path = require('path');

const routeDir = require('../util/path');
const router = express.Router();

router.get('/add-product', (req, res, next) => {
    res.sendFile(path.join(routeDir, 'views', 'add-product.html'));
});

router.post('/add-product', (req, res, next) => {
    res.redirect('/');
});

module.exports = router;