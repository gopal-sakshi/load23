const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send(`welcome... youve hit ${req.url} path`);
});

app.listen(3049, () => {
    console.log('listening on 3049 port');
});