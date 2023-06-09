const Datastore = require('nedb');
const path = require('path');
const db = new Datastore({ filename: path.join(__dirname, '../goals.db'), autoload: true });


exports.show_about = function(req, res) {
    res.render("about", { isAuthenticated: true })
}
exports.show_gym_workouts = function(req, res) {
    res.render("gymWorkouts", { isAuthenticated: true })
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
    res.render("profile", { isAuthenticated: true })
}
exports.show_set_goals = function(req, res) {
    res.render("setgoals", { isAuthenticated: true })
}
exports.show_diary = function(req, res) {
    res.render("diary", { isAuthenticated: true })
}
exports.show_edit_goals = function(req, res) {
    res.render("editgoals", { isAuthenticated: true });
  };
  
//shows the landing pager
exports.show_landing_page = function (req, res) {
    console.log(req.oidc.isAuthenticated());
    res.render("landingPage", { title: "Heath App",
    isAuthenticated: req.oidc.isAuthenticated(),
    user: req.oidc.user,
});
};

exports.save_goal = function (req, res) {
    // gets the data from the form and assigns it to variable goal
    const goal = {
      date: req.body.date,
      goal: req.body.goal,
      description: req.body.description,
      //assigns user_id to their auth0 id gathered from the user logging in
      user_id: req.oidc.user.sub
    };

    //function to ensure the database loads correctly
    db.loadDatabase(function (err) {
        if (err) {
            console.log(err);
        } else {
            console.log('Database loaded successfully');
        }
    });
  
    // insert the data into the database
    db.insert(goal, function (err, newDoc) {
      if (err) {
        console.log(err);
      } else {
        console.log(newDoc);
      }
    });
    //redirect to landingpage
    res.redirect("/");
  };
  //function to view the diary
  exports.view_diary = function(req, res) {
    db.find({ user_id: req.oidc.user.sub }).sort({ completed: 1, date: 1 }).exec(function(err, docs) {
      if (err) {
        console.log(err);
      } else {
        console.log(docs);
        res.render("diary", { goals: docs, isAuthenticated: true });
      }
    });
  };
  //function to delete goal
  exports.delete_goal = function(req, res) {
    const goalId = req.body._id;//requests the id of the goal the user is trying to delete
  
    db.remove({ _id: goalId }, {}, function(err, numRemoved) {
      if (err) {
        console.log(err);
        res.redirect("/");
      } else {
        console.log(`${numRemoved} goal(s) deleted`);
        res.redirect("/diary");
      }
    });
  };

  exports.update_goal = function(req, res) {
    const id = req.params.id;
    const { date, goal, description, completed } = req.body;

  db.update({ _id: id }, { $set: { date, goal, description, completed } }, {}, (err, numReplaced) => {
    if (err) {
      console.error(err);
      res.sendStatus(500);
    } else {
      res.redirect('/');
    }
  });
}


        
  
