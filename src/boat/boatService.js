const boatModel = require('./boatModel');

module.exports.getDataFromDBService = async () => {
    try {
        const result = await boatModel.find({});
        return result;
    } catch (error) {
        console.error('Error fetching boats:', error);
        throw error;
    }
};

module.exports.createBoatDBService = async (boatDetails) => {
    try {
        const boatModelData = new boatModel({
            name: boatDetails.name,
            weight_limit: boatDetails.weight_limit,
            brand: boatDetails.brand
        });

        await boatModelData.save();
        return true;
    } catch (error) {
        console.error('Error saving boat:', error);
        throw error;
    }
};