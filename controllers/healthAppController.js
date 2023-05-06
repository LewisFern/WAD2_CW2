exports.show_about = function(req, res) {
    res.render("about");
}

exports.show_gym_workouts = function(req, res) {
    res.render("gymWorkouts");
}

exports.show_landing_page = function (req, res) {
    console.log(req.oidc.isAuthenticated());
    res.render("landingPage", { title: "Heath App",
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user,
});
};
