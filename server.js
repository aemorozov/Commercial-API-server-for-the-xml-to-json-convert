const express = require('express');
const app = express();
const keys = require('./keys');

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

app.get('/api/keys', (req, res) => {
    const key = req.headers['authorization'];
    if (!key) {
        return res.status(401).json({ error: `demo server for license keys` });
    }
    const isKeyValid = Object.values(keys).includes(`${key}`);
    res.json(isKeyValid);
});

module.exports = app;
