const mongoose = require( "mongoose" );


const User = mongoose.Schema( {
    name: {
        type: "String",
        required: true,
        min: 3,
        max:50
    }
} )

module.exports = mongoose.model(User, "user")

// var userModel = mongoose.model('user',User);

// module.exports = mongoose.model("user", userModel);