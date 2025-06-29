var express = require('express');

const router = express.Router();
var boatController = require('../src/boat/boatController');

router.route('/boats/getAll').get(boatController.getDataConntrollerfn);

router.route('/boats/create').post(boatController.createBoatControllerfn);

router.route('/boats/update/:id').patch(boatController.updateBoatControllerfn);

router.route('/boats/delete/:id').delete(boatController.deleteBoatControllerfn);

module.exports = router;