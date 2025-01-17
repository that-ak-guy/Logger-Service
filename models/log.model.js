const Joi = require("joi");

const LogSchema = Joi.object({
    logid: Joi.string()
        .required(),
    level: Joi.string()
        .required(),
    statusCode: Joi.number()
        .required(),
    code: Joi.string()
        .required(),
    message: Joi.string()
        .required(),
    stage: Joi.string()
        .required(),
    timestamp: Joi.required(),
    reqData: Joi.object()
        .required(),
    errorData: Joi.object()
        .required(),
    systemData: Joi.object(),
    userData: Joi.object()
})


module.exports = { LogSchema }