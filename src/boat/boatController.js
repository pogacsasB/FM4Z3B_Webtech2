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

module.exports = { getDataConntrollerfn, createBoatControllerfn};