const ApiError = require("../utils/ApiError")


const ErrorHandler = (err, req, res, next) => {
    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            statusCode: err.statusCode,
            code: err.code,
            message: err.message,
            errors: err.errors
        })
    }

    return res.status(500).json({ statusCode: 500, code: 'INTERNAL_ERROR', message: 'Unknown Server Error', errors: [], stack: err.stack })
}

module.exports = { ErrorHandler }