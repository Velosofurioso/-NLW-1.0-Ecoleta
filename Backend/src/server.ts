import express from 'express';

const app = express();

app.get('/users', (req, res) => {
    console.log('listagem de usuarios');

    res.json([
        'Lucas',
        'Pedro',
        'Thiago',
        'Yan',
        'João'
    ]);
});

app.listen('3333');