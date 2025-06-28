var express = require('express');

const router = express.Router();
var boatController = require('../src/boat/boatController');

router.route('/boats/getAll').get(boatController.getDataConntrollerfn);

router.route('/boats/create').post(boatController.createBoatControllerfn);

module.exports = router;