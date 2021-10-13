const errorResponse = require('../utils/errorResponse');

const errorHandler = (err, req, res, next) => {
    //log to console.log()
    console.log(err.name.red);
    if(err.name === 'CastError'){
        const message = `Bootcamp not found with the id of ${err.value}`;
        return res.status(404).json({
            success: false,
            error: message
        });
    } else if(err.name === 'ValidationError') {
        const message = Object.values(err.errors).map(val => val.message);
        return res.status(400).json({
            success: false,
            error: message
        });
    } else {
        res.status(err.statusCode || 500).json({
            error: err.message || 'Server Error',
            success: false,
        });
    }
}

module.exports = errorHandler;