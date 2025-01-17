const Joi = require("joi");
const { ErrorCodes, ErrorMessages } = require("../config/codes");
const ApiError = require("../utils/ApiError");
const { AsyncHandler } = require("../utils/AsyncHandler");
const { LogSchema } = require("../models/log.model");


const LogValidator = AsyncHandler(async (req, _, next) => {
    const logData = req.body

    if (!logData) {
        console.log('No log data found.')
        throw new ApiError(404, ErrorCodes.Nolog, ErrorMessages.Nolog)
    }

    const valid = LogSchema.validate(logData)
    if (valid.error) {
        console.log(valid.error.details)
        throw new ApiError(400, ErrorCodes.Invalidlogdata, ErrorCodes.Invalidlogdata)
    }

    next()
})


module.exports = { LogValidator }