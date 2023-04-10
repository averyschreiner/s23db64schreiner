var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var dessert_controller = require('../controllers/desserts');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Costume.
router.post('/desserts', dessert_controller.dessert_create_post);
// DELETE request to delete Costume.
router.delete('/desserts/:id', dessert_controller.dessert_delete);
// PUT request to update Costume.
router.put('/desserts/:id', dessert_controller.dessert_update_put);
// GET request for one Costume.
router.get('/desserts/:id', dessert_controller.dessert_detail);
// GET request for list of all Costume items.
router.get('/desserts', dessert_controller.dessert_list);
module.exports = router;