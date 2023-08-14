const mongoose = require("mongoose");

exports.DBConnectivity = () => {
  mongoose.connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }).then((data)=>{
    console.log(`DB connection succesfull ${data.connection.host}`)
  })
  //.catch((err)=>{
  //   console.log(err)
  // })

};
