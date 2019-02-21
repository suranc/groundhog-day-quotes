const express = require('express');
const router = express.Router();

// Require the controllers
const quote_controller = require('../controllers/quote.controller');


// a simple test url to check that all of our files are communicating correctly.
router.get('/test', quote_controller.test);

router.post('/create', quote_controller.quote_create);
router.get('/:id', quote_controller.quote_details);
router.put('/:id/update', quote_controller.quote_update);
router.delete('/:id/delete', quote_controller.quote_delete);

module.exports = router;

