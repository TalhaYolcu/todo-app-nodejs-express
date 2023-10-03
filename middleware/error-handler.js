
//custom Generic API Error
const {CustomAPIError} = require('../errors/custom-error')

//error handler
const errorHandlerMiddleware = (err,req,res,next) => {
    if(err instanceof CustomAPIError) {
        return res.status(err.statusCode).json({msg:err.message})
    }
    /*console.log(err)
    return res.status(err.status).json({msg:err.message})*/
}

module.exports = errorHandlerMiddleware