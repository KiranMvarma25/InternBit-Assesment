const logger = require('./logger');

const errorHandler = (err, req, resp, next) => {
    logger.error(`${req.method} ${req.originalUrl} - ${err.message}`);
    resp.status(err.status || 500).json({
        error: err.message || 'Internal Server Error'
    })
}

module.exports = errorHandler;