const mongoose = require('mongoose');

const modelSchema = mongoose.Schema({

    title : { type : String,
                required : true },

    description : {
                    type : String
                            }


})

    
module.exports = mongoose.model('booksnews', modelSchema);





