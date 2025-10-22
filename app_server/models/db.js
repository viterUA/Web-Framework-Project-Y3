const mongoose = require('mongoose');
const dbURL = "mongodb+srv://dbUser:<webframe>@uasoccer.qjqburl.mongodb.net/"

try {
   
mongoose.connect(
    dbURL,
    { useNewUrlParser: true, useUnifiedTopology: true }).then(
    () => {console.log(" Mongoose is connected")},
	err=> {console.log(err)}
	);
}
 catch (e) {
  console.log("could not connect");
}

require('./locations');
