const express = require('express');
const http = require('http');
const app = express();
const timeTaken = require('./middleware23/timeTaken11');
const rateLimitMiddleware = require('./middleware23/rateLimiter23');

app.get('/', (req, res) => {
    console.log(http.globalAgent.maxSockets)
    res.send(`welcome... youve hit ${req.url} path`);
});

app.get('/timeout23', (req, res) => {
    // req.setTimeout(500000);                 // timeout for specific route
    setTimeout(() => {
        res.send('timeout ayyinda ledaa ??');
    }, 5000)
});


// hit the same endpoint 6 times consequetively from postman
app.get('/timeTaken11', rateLimitMiddleware, timeTaken, (req, res) => {
    for(let i=0; i<1e1; i++) { }
    res.send({
        msg: 'let me checkkkkkkkkkk'
    })
});
/*****************************************************/
const server23 = app.listen(3049, () => {
    console.log('listening on 3049 port');
});

server23.timeout = 1000;                    // timeout for all routes
server23.on('timeout', () => {
    console.log('timeout event trigger ayindi');
});

// https://stackoverflow.com/questions/51935860/node-js-what-is-the-difference-between-server-settimeout-server-timeout-and-se
/*****************************************************/