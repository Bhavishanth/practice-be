const mongoose = require('mongoose');
const express = require("express");
const router = express.Router();
const booksModel = require('../models/books')

// to read the files

router.get('/read', (req, res) => {

    booksModel.find()
    .then((book) => {

        res.json(book);

    })

    .catch((error) => {
        res.send(error);
    });
    

})

// to add data

router.post('/add', (req, res) => {

    const data = new booksModel({
        title : req.body.title,
        description : req.body.description
    });
    
    data
    .save()
    .then((book) => {

        res.json(book)

    })

    .catch((error) => {
        res.send(error);
    });
    
})

// to update datas

router.patch('/update/:id', (req, res) => {

booksModel.updateOne(

    { _id : req.params.id },

    { $set : {description : req.body.description }
    
    }

)

    .then((data) => {

        res.json(data)
    })

    .catch((error) => {

        res.send(error)
    })

})

// to delete data

router.delete('/delete/:id', (req, res) => {

    booksModel.deleteOne(
        {_id : req.params.id}
    )
    .then((data) => {
        res.send(data);
    })
    .catch((error) => {
        res.send(error)
    })

})

module.exports = router;