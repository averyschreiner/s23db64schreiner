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

// List of all Dessserts
exports.dessert_list = async function(req, res) {
    try {
        theDesserts = await Dessert.find();
        res.send(theDesserts);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}

// VIEWS
// Handle a show all view
exports.dessert_view_all_Page = async function(req, res) {
    try {
        theDesserts = await Dessert.find();
        res.render('Dessert', { title: 'Dessert Search Results', results: theDesserts });
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}

// Handle Dessert create on POST.
exports.dessert_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Dessert();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"dessert_type":"goat", "cost":12, "size":"large"}
    document.name = req.body.name;
    document.rating = req.body.rating;
    document.color = req.body.color;
    try {
        let result = await document.save();
        res.send(result);
    }
    catch (err) {
        res.status(500);
        res.send(`{"error": ${err}}`);
    }
}

exports.dessert_detail = async function(req, res) {
    console.log("detail " + req.params.id)
    try {
        result = await Dessert.findById(req.params.id)
        res.send(result)
    }
    catch (error) {
        res.status(500)
        res.send(`${error}: document for id ${req.params.id} not found`)
    }
}

// Handle Dessert update form on PUT.
exports.dessert_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body ${JSON.stringify(req.body)}`)
    try {
        let toUpdate = await Dessert.findById(req.params.id)
        // Do updates of properties
        if(req.body.dessertname) 
            toUpdate.name = req.body.dessertname;
        if(req.body.dessertrating) 
            toUpdate.rating = req.body.dessertrating;
        if(req.body.dessertcolor) 
            toUpdate.size = req.body.dessertcolor;
        let result = await toUpdate.save();
        console.log("Sucess " + result)
        res.send(result)
    } 
    catch (error) {
        res.status(500)
        res.send(`${error}: Update for id ${req.params.id} failed`)
    }
}

// Handle Dessert delete on DELETE.
exports.dessert_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
        result = await Dessert.findByIdAndDelete(req.params.id)
        console.log("Removed " + result)
        res.send(result)
    } catch (err) {
        res.status(500)
        res.send(`{"error": Error deleting ${err}}`);
        }
};

// Handle a show one view with id specified by query
exports.dessert_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
        result = await Dessert.findById( req.query.id)
        console.log('\n\n' + result + '\n\n')
        res.render('dessertdetail', { title: 'Dessert Detail', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for creating a dessert.
// No body, no in path parameter, no query.
// Does not need to be async
exports.dessert_create_Page = function(req, res) {
    console.log("create view")
    try{
        res.render('dessertcreate', { title: 'Dessert Create'});
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle building the view for updating a dessert.
// query provides the id
exports.dessert_update_Page = async function(req, res) {
    console.log("update view for item " + req.query.id)
    try{
        let result = await Dessert.findById(req.query.id)
        res.render('dessertupdate', { title: 'Dessert Update', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};

// Handle a delete one view with id from query
exports.dessert_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
        result = await Dessert.findById(req.query.id)
        console.log('\n\n' + result + '\n\n')
        res.render('dessertdelete', { title: 'Dessert Delete', toShow: result });
    }
    catch(err){
        res.status(500)
        res.send(`{'error': '${err}'}`);
    }
};
