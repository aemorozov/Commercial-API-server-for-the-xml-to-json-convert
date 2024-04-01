const express = require('express');
const app = express();
const PORT = 3000;
const keys = require('./keys')

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET')
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
    next();
});

app.get('/api/keys', (req, res) => {
    const key = req.query.key;
    const isKeyValid = keys.includes(key)
    res.json({ isValid: isKeyValid });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});