const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let QuoteSchema = new Schema({
    quote: {type: String, required: true, max: 1000},
});


// Export the model
module.exports = mongoose.model('Quote', QuoteSchema);