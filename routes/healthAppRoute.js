const express = require('express');
const router = express.Router();
const controller = require('../controllers/healthAppController.js');


router.get("/", controller.show_landing_page);
router.get('/about', controller.show_about);
router.get('/gymworkouts', controller.show_gym_workouts);

module.exports = router;