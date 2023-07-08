const mongoose = require('mongoose');
const express = require('express');
const app = express();
const bodyparser = require('body-parser');
const cors = require('cors');
const booksRoute = require('./router/books')

// middleware

app.use(cors());
app.use(bodyparser.json());
app.use(express.json());

// import from router

app.use('/books', booksRoute);

// connect to mongodb

mongoose.connect('mongodb+srv://bhavishanth:bhavi98@bhavi46.1co6otp.mongodb.net/?retryWrites=true&w=majority')

const con = mongoose.connection;

try{
    con.on("open", ()=>{
        console.log("connected to db successfully")
    })

}
catch(error)
{
    console.log(error);

}



// create a server and connect to the port

PORT = 4000;
app.listen(PORT, () => {

    console.log(`connected to the port ${PORT} successfully`);
})