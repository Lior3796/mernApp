const mongoose = require("mongoose");
mongoose.connect(process.env.CONNECTION_URL,
{
    useNewUrlParser:true,
    useUnifiedToplogy:true
})
.then(console.log("MongoDbConnect lior"))
.catch(error => {
    console.error("Connection error", error.message);
})
module.exports = mongoose.connection;
