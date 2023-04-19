var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var dessert_controller = require('../controllers/desserts');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// COSTUME ROUTES ///
// POST request for creating a Dessert.
router.post('/desserts', dessert_controller.dessert_create_post);
// DELETE request to delete Dessert.
router.delete('/desserts/:id', dessert_controller.dessert_delete);
// PUT request to update Dessert.
router.put('/desserts/:id', dessert_controller.dessert_update_put);
// GET request for one Dessert.
router.get('/desserts/:id', dessert_controller.dessert_detail);
// GET request for list of all Dessert items.
router.get('/desserts', dessert_controller.dessert_list);
/* GET detail dessert page */
router.get('/detail', dessert_controller.dessert_view_one_Page);
/* GET create dessert page */
router.get('/create', dessert_controller.dessert_create_Page);

module.exports = router;