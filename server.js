const express = require( "express" );

// const User = require( "./models/User" );

const app = express();


app.get( "/", ( req, res ) =>{
    res.send("Api health is good")
} )

app.get( "/tour", ( req, res ) =>{
    res.send("Api health is good")
} )

const port = process.env.PORT || 3001;

app.listen( port, () => {
    console.log( "Server running " )
});