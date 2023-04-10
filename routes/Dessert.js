var express = require('express');
var router = express.Router();
const dessert_controller = require('../controllers/desserts')

/* GET home page. */
router.get('/', dessert_controller.dessert_view_all_Page)
module.exports = router;
