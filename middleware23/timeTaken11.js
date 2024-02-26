const clsTracer32 = require("cls-rtracer");

const timeTaken = (req, res, next) => {
    req.context23 = {
        requestId : clsTracer32.id(),                   // why its not working... coming as undefined
        startTime : process.hrtime.bigint()
    };
    // see middlewares in meity
    res.on('finish', () => {
        req.context23.endTime = process.hrtime.bigint();
        console.log('timeTaken for request ===> ', `${req.context23.endTime}` - `${req.context23.startTime}`); 
    });
    console.log('context23 ====> ', req.context23);
    next();
}

module.exports = timeTaken