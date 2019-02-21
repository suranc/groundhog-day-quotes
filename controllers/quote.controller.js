const Quote = require('../models/quote.model');

//Simple version, without validation or sanitation
exports.test = function (req, res) {
    res.send('Greetings from the Test controller!');
};

exports.quote_create = function (req, res, next) {
    let quote = new Quote(
        {
            quote: req.body.quote,
        }
    );

    console.log(req.body);

    quote.save(function (err) {
        if (err) {
            return next(err);
        }
        res.send('Quote Created successfully')
    })
};

exports.quote_details = function (req, res, next) {
    Quote.findById(req.params.id, function (err, quote) {
        if (err) return next(err);
        res.send(quote);
    })
};

exports.quote_update = function (req, res, next) {
    Quote.findByIdAndUpdate(req.params.id, {$set: req.body}, function (err, quote) {
        if (err) return next(err);
        res.send('Quote updated.');
    });
};

exports.quote_delete = function (req, res, next) {
    Quote.findByIdAndRemove(req.params.id, function (err) {
        if (err) return next(err);
        res.send('Quote deleted successfully!');
    })
};