const ErrorCodes = {
    Expiredtoken: 'EXPIRED_TOKEN',
    Invalidtoken: 'INVALID_TOKEN',
    Notoken: 'NO_TOKEN',
    Internalerror: 'INTERNAL_ERROR',
    Userconflict: 'USER_CONFLICT',
    Usernotfound: 'USER_NOT_FOUND',
    Emailexists: 'UNIQUE_EMAIL',
    InvalidPass: 'INVALID_PASSWORD',
    Nolog: 'NO_LOG_DATA',
    Invalidlogdata: 'INVALID_LOG_DATA',
    Lognotfound: 'LOG_NOT_FOUND'
}

const ErrorMessages = {
    Expiredtoken: 'Your token has expired.',
    Invalidtoken: 'Invalid token.',
    Notoken: 'No token provided.',
    Internalerror: 'An internal error occurred.',
    Userconflict: 'Valid Session already exists.',
    Usernotfound: 'User not found.',
    Emailexists: 'Email already exists.',
    InvalidPass: 'Wrong password.',
    Nolog: 'No log data provided',
    Invalidlogdata: 'Invalid log data.',
    Lognotfound: 'Log was not found.'
}

const SuccessCodes = {
    TokenSigned: 'TOKEN_SIGNED',
    Loginsuccess: 'LOGIN_SUCCESS',
    Registersuccess: 'REGISTER_SUCCESS',
    Logcreated: 'LOG_CREATED'
}

const SuccessMessages = {
    TokenSigned: 'Token Signed successfully.',
    Loginsuccess: 'User login successful.',
    Registersuccess: 'User Registered successfully.',
    Logcreated: 'Log created successfully.'
}

module.exports = { ErrorCodes, ErrorMessages, SuccessCodes, SuccessMessages }
