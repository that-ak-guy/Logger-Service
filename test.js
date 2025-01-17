// const Joi = require("joi");
// const { ErrorCodes, ErrorMessages } = require("./config/codes");

const { configDotenv } = require("dotenv")
const { FindLogByLogid } = require("./repositories/log.repo")
const { marshall } = require("@aws-sdk/util-dynamodb")
const { QueryCommand } = require("@aws-sdk/client-dynamodb")
const DBClient = require("./config/initDB")
configDotenv()

// const validator = (data) => {

//     const schema = Joi.object({
//         id: Joi.string()
//             .required(),
//         level: Joi.string()
//             .required(),
//         statusCode: Joi.number()
//             .required(),
//         code: Joi.string()
//             .required(),
//         message: Joi.string()
//             .required(),
//         stage: Joi.string()
//             .required(),
//         timestamp: Joi.required(),
//         reqData: Joi.object()
//             .required(),
//         errorData: Joi.object()
//             .required(),
//         systemData: Joi.object(),
//         userData: Joi.object()
//     })

//     const valid = schema.validate(data)
//     console.log(valid.error)
//     if (!valid) {
//         console.log('invalid')
//     }
//     else {
//         console.log('valid')
//     }
// }

// const ApiLog = {
//     id : 'uydg62g4-24g2b',
//     level: 'error',
//     statusCode: 400,
//     code: ErrorCodes.Internalerror,
//     message: ErrorMessages.Internalerror,
//     stage: 'dev',
//     timestamp: new Date().toLocaleString(),
//     reqData: {
//         path: '/logs/create',
//         body: {
//             uuid: 'iureu7e-er353-3bv35g',
//             role: 'user'
//         },
//         method: 'POST'
//     },
//     errorData: {
//         message: 'Somethinf fucked up.',
//         stack: 'somethins somethign ......'
//     },
// }

// validator(ApiLog)

const GetData = async (logid) => {

    const query = {
        TableName: process.env.LOGS_TABLE,
        ExpressionAttributeNames: {
            "#logid": "logid"
        },
        ExpressionAttributeValues: {
            ":logidValue": logid
        },

        KeyConditionExpression: "#logid = :logidValue"
    }

    const command = new QueryCommand(query)

    try {
        const dbData = await DBClient.send(command)
        console.log(dbData)


    }
    catch (error) {
        console.log('Error getting logid.' + error.stack)

    }

}

const logid = 'uydg62g4-24g2'

const data = GetData(logid)

