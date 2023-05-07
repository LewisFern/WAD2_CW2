const express = require('express');
const router = express.Router();
const controller = require('../controllers/healthAppController.js');


router.get("/", controller.show_landing_page);
router.get('/about', controller.show_about);
router.get('/gymworkouts', controller.show_gym_workouts);
router.get('/homeworkouts', controller.show_home_workouts);
router.get('/runningworkouts', controller.show_running_workouts);
router.get('/mentalwellbeing', controller.show_mental_wellbeing);
router.get('/sleep', controller.show_sleep_and_tiredness);
router.get('/smokingadvice', controller.show_smoking_advice);
router.get('/carbs', controller.show_carbs);
router.get('/fats', controller.show_fats);
router.get('/fruit', controller.show_fruit);
router.get('/protein', controller.show_protein);
router.get('/vegetables', controller.show_vegetables);
router.get('/profile', controller.show_profile);
router.get('/setgoals', controller.show_set_goals);
router.post('/savegoal', controller.save_goal);
router.get('/diary', controller.view_diary)



module.exports = router;