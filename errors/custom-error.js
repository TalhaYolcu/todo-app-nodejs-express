
//custom error class that helps to handle errors
class CustomAPIError extends Error {
    constructor(message,statusCode) {
        super(message)
        this.statusCode = statusCode

    }
}
//functionto call the constructor
const createCustomError = (msg,statusCode) =>{
    return new CustomAPIError(msg,statusCode)
}

module.exports = {
    createCustomError,CustomAPIError
}