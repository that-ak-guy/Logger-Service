const { Router } = require("express");
const { CreateLogsController } = require("../controllers/log.controller");
const { LogValidator } = require("../middlewares/validator.middleware");


const LogRouter = Router()

LogRouter.post('/create', LogValidator, CreateLogsController)

module.exports = LogRouter