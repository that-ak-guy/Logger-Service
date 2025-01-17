const { InternalResponse } = require('../utils/InternalDataUtil')
const ApiError = require('../utils/ApiError')
const { ErrorCodes, ErrorMessages } = require('../config/codes')
const { PutItemCommand, QueryCommand } = require('@aws-sdk/client-dynamodb')
const DBClient = require('../config/initDB')
const { marshall, unmarshall } = require('@aws-sdk/util-dynamodb')


const FindLogByLogid = async (logid) => {
    const responseData = new InternalResponse()

    if (!logid) {
        console.log('No log id found.')
        responseData.error = new ApiError(500, ErrorCodes.Internalerror, ErrorMessages.Internalerror)
        return responseData
    }

    const query = {
        TableName: process.env.LOGS_TABLE,
        ExpressionAttributeNames: {
            "#logid": "logid"
        },
        ExpressionAttributeValues: {
            ":logidValue": marshall(logid)
        },

        KeyConditionExpression: "#logid = :logidValue"
    }

    const command = new QueryCommand(query)

    try {
        const dbData = await DBClient.send(command)

        if (!dbData.Items)

        if (dbData.Items.length === 0) {
            responseData.error = new ApiError(404, ErrorCodes.Lognotfound, ErrorMessages.Lognotfound)
            return responseData
        }

        responseData.state = true
        responseData.data = unmarshall(dbData.Items[0])

    }
    catch (error) {
        console.log('Error getting logid.' + error)
        responseData.error = new ApiError(500, ErrorCodes.Internalerror, ErrorMessages.Internalerror, [error])
    }

    return responseData
}


const CreateLogByLogid = async (logData) => {
    const responseData = new InternalResponse()

    if (!logData) {
        console.log('No log Data was found.')
        responseData.error = new ApiError(500, ErrorCodes.Internalerror, ErrorMessages.Internalerror)
        return responseData
    }

    const query = {
        TableName: process.env.LOGS_TABLE,
        Item: marshall(logData)
    }

    const command = new PutItemCommand(query)

    try {
        const dbData = await DBClient.send(command)
        responseData.state = true

    }
    catch (error) {
        console.log('Error Creating log : ' + error)
        responseData.error = new ApiError(500, ErrorCodes.Internalerror, ErrorMessages.Internalerror)
    }

    return responseData
}


module.exports = { FindLogByLogid, CreateLogByLogid }