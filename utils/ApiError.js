class ApiError extends Error {
    constructor(statusCode, code, message = "Something went Wrong", errors = [], stack = '') {
        super(message)
        this.statusCode = statusCode
        this.code = code
        this.message = message
        this.errors = errors
        if (stack) {
            this.stack = stack
        }
        else {
            Error.captureStackTrace(this, this.constructor)
        }
    }
}

module.exports = ApiError