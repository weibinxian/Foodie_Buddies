const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const UserSchema = mongoose.Schema({
  email: {
    type: String,
    required: true,
    unique: true
  },
  familyName: {
    type: String,
    required: true
  },
  givenName: {
    type: String,
    required: true
  },
  photoUrl: {
    type: String,
    required: true
  },
  userId: {
    type: String,
    required: true,
    unique: true
  },
  friendList: [
    {
      type: Schema.Types.ObjectId,
      ref: "User",
      unique: true
    }
  ],
  roomList: Schema.Types.Mixed,
  hostRoomList: Schema.Types.Mixed
});

const User = mongoose.model("User", UserSchema);
module.exports = User;
