//import mongoose
const mongoose = require('mongoose')

//connect to the db
const connectDB = (url) => {
    //connect to mongoose
    return mongoose.connect(url,
        {
            useNewUrlParser:true,
            useCreateIndex : true,
            useFindAndModify : false,
            useUnifiedTopology : true,
        }
    )
}

module.exports = connectDB




