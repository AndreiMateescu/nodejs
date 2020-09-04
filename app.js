const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const routeDir = require('./util/path');
const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));

app.use(adminRoutes);
app.use(userRoutes);

app.use((req, res, next) => {
   res.status(404).sendFile(path.join(routeDir, 'views', 'error.html'));
});

app.listen(3000);