const { SuccessCodes, SuccessMessages } = require("../config/codes")
const { CreateLogService } = require("../services/log.service")
const ApiResponse = require("../utils/ApiResponse")
const { AsyncHandler } = require("../utils/AsyncHandler")


const CreateLogsController = AsyncHandler(async (req, res) => {
    const logData = req.body

    const log = await CreateLogService(logData)
    if (!log.state) {
        throw log.error
    }

    res.status(200).json(new ApiResponse(200, SuccessCodes.Logcreated, SuccessMessages.Logcreated))
})


module.exports = { CreateLogsController }