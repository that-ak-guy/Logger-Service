const { DynamoDBClient } = require("@aws-sdk/client-dynamodb");


const DBClient = new DynamoDBClient()


module.exports = DBClient