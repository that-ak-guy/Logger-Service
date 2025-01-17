class ApiResponse {
    constructor(statusCode, code, message = 'Success', data = null) {
        this.statusCode = statusCode
        this.code = code
        this.message = message
        this.data = data
        this.success = statusCode < 400
    }
}

module.exports = ApiResponse