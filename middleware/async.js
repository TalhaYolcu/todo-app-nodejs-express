

//async wrapper to make request functions more generic
const asyncWrapper = (fn) => {
    return async(req,res,next) => {
        try {
            await fn(req,res,next)
        } catch (error) {
            next(error)
        }
    }
}


module.exports = asyncWrapper