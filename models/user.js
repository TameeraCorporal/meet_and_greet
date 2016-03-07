var mongoose= require("mongoose");
var passportLocalMongoose = require("passport-local-mongoose");

var UserSchema = new mongoose.Schema({
  username: String,
  password: String,
  first_name: String,
  last_name: String,
  City: String,
  State: String,
  Bio: String
  
});

UserSchema.plugin(passportLocalMongoose);
module.exports = mongoose.model("User", UserSchema);