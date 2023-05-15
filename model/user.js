const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  first_name: { type: String, default: null },
  last_name: { type: String, default: null },
  email: { type: String, unique: true },
  password: { type: String },
  token: { type: String },
});

const user = model("users", userSchema);
module.exports = user;
