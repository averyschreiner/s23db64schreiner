var Dessert = require('../models/dessert');
// List of all Desserts
exports.dessert_list = function(req, res) {
res.send('NOT IMPLEMENTED: Dessert list');
};
// for a specific Dessert
exports.dessert_detail = function(req, res) {
res.send('NOT IMPLEMENTED: Dessert detail: ' + req.params.id);
};
// Handle Dessert create on POST.
exports.dessert_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: Dessert create POST');
};
// Handle Dessert delete form on DELETE.
exports.dessert_delete = function(req, res) {
res.send('NOT IMPLEMENTED: Dessert delete DELETE ' + req.params.id);
};
// Handle Dessert update form on PUT.
exports.dessert_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: Dessert update PUT' + req.params.id);
};
