const { default: axios } = require("axios");

axios({
    method: 'post',
    baseURL: 'https://logger-service.vercel.app/logs',
    url: 'create',
    data: {
        logid: "uydg62g4-24g2betbet",
        level: "error",
        statusCode: 400,
        code: "Internalerror",
        message: "Internalerror",
        stage: "dev",
        timestamp: "2025-01-17T14:33:45.000Z",
        reqData: {
            path: "/logs/create",
            body: {
                uuid: "iureu7e-er353-3bv35g",
                role: "user"
            },
            method: "POST"
        },
        errorData: {
            message: "Somethinf fucked up.",
            stack: "somethins somethign ......"
        }
    }

}).then((data) => {
    console.log(data)
}).catch((error) => {
    console.log(error)
})