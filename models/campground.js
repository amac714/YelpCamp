//========================
// Campground Schema Model
//========================

var mongoose = require("mongoose");

// Schema Setup
var campgroundSchema = new mongoose.Schema({
   name: String,
   price: String,
   image: String,
   description: String,
   location: String,
   lat: Number,
   lng: Number,
   createdAt: {
      type: Date,
      default: Date.now
   },
   author: {
      id:{
         type: mongoose.Schema.Types.ObjectId,
         ref: "User"
      },
      username: String
   },
   comments: [
      {  //referencing/associating to comments db
         type: mongoose.Schema.Types.ObjectId,
         ref: "Comment" //name of model
      }   
   ]
});

module.exports = mongoose.model("Campground", campgroundSchema);