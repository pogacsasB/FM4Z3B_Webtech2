var boatService = require('./boatService');


var getDataConntrollerfn = async (req, res) =>
{
    var boat = await boatService.getDataFromDBService();
    res.send({ "status": true, "data": boat });
}

var createBoatControllerfn = async (req, res) => 
{
    var status = await boatService.createBoatDBService(req.body);
    if (status) {
        res.send({ "status": true, "message": "Boat created successfully" });
    } else {
        res.send({ "status": false, "message": "Error creating boat" });
    }
}

var updateBoatControllerfn = async (req, res) => 
{
     
    var result = await boatService.updateBoatDBService(req.params.id,req.body);
     if (result) {
        res.send({ "status": true, "message": "Selected boat has been successfully updated!"} );
     } else {
         res.send({ "status": false, "message": "Failed to update the selected boat." });
     }
}

var deleteBoatControllerfn = async (req, res) => 
{
     var result = await boatService.removeBoatDBService(req.params.id);
     if (result) {
        res.send({ "status": true, "message": "Selected boat has been successfully deleted!"} );
     } else {
         res.send({ "status": false, "message": "Failed to update the selected boat." });
     }
}

module.exports = { getDataConntrollerfn, createBoatControllerfn, updateBoatControllerfn, deleteBoatControllerfn};