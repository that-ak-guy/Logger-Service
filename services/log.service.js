const { CreateLogByLogid } = require("../repositories/log.repo")
const { InternalResponse } = require("../utils/InternalDataUtil")

const CreateLogService = async (logData) => {
    const responseData = new InternalResponse()

    const log = await CreateLogByLogid(logData)
    if (!log.state) {
        responseData.error = log.error
        return responseData
    }

    responseData.state = true
    return responseData
}


module.exports = { CreateLogService }