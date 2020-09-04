const express = require('express');
const app = express();

// app.use((res, req, next) => {
//     console.log('First middleware');
//     next();
// });
//
// app.use((res, req, next) => {
//     console.log('Second middleware');
//     res.send('<p>Assignment solved</p>');
// });

app.use('/users', (req, res, next) => {
    console.log('/users middleware');
    res.send('<p>/users middleware</p>');
});

app.use('/', (req, res, next) => {
    console.log('/ middleware');
    res.send('<p>/ middleware</p>');
});

app.listen(3000);