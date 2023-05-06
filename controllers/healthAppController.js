exports.show_about = function(req, res) {
    res.render("about");
}
exports.show_gym_workouts = function(req, res) {
    res.render("gymWorkouts", { isAuthenticated: true });
}
exports.show_home_workouts = function(req, res) {
    res.render("homeworkouts", { isAuthenticated: true })
}
exports.show_running_workouts = function(req, res){
    res.render("runningworkouts", { isAuthenticated: true })
}
exports.show_mental_wellbeing = function(req, res){
    res.render("mentalwellbeing", { isAuthenticated: true })
}
exports.show_sleep_and_tiredness = function(req, res){
    res.render("sleep", { isAuthenticated: true })
}
exports.show_smoking_advice = function(req, res){
    res.render("smokingadvice", { isAuthenticated: true })
}
exports.show_carbs = function(req, res) {
    res.render("carbs", { isAuthenticated: true })
}
exports.show_fats = function(req, res) {
    res.render("fats", { isAuthenticated: true })
}
exports.show_fruit = function(req, res) {
    res.render("fruit", { isAuthenticated: true })
}
exports.show_protein = function(req, res) {
    res.render("protein", { isAuthenticated: true })
}
exports.show_vegetables = function(req, res) {
    res.render("vegetables", { isAuthenticated: true })
}
exports.show_profile = function(req, res) {
    res.render("profile", { isAuthenticated: true });
}

exports.show_landing_page = function (req, res) {
    console.log(req.oidc.isAuthenticated());
    res.render("landingPage", { title: "Heath App",
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user,
});
};
