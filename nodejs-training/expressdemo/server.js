var express = require("express");
var app = express();
var bp = require("body-parser");
var _ = require("underscore");
var middleware = require("./middleware.js");

app.get("/", function(req, res) {
  res.render("index");
});
app.use(bp.json());
// app.use(express.static("public"));
app.set("view engine", "ejs");
app.set("public", __dirname + "/view");
app.set("view  options", { layout: false });

app.use(
  bp.urlencoded({
    extended: true
  })
);

app.use(middleware.logger); //uses it for all functions

// app.use(middleware.requireAuth);

var uid = 1;
var userdata = [
  // {
  //     taskname: "purchase veggis",
  //     completed: true
  // },
  // {
  //     taskname: "play games",
  //     completed: false
  // },
  // {
  //     taskname: "feed the cat",
  //     completed: false
  // }
];

app.post("/posttasks", function(req, res) {
  var data = req.body;
  data.id = uid++;
  console.log(data);
  userdata.push(data);
  res.send("data is added");
});

app.get("/loadtasks", function(req, res) {
  res.json(userdata);
});
app.get("/loadtasks/:id", (req, res) => {
  var todoid = parseInt(req.params.id);
  var nct = _.findWhere(userdata, { id: todoid });

  // userdata.forEach(function(todo){
  //     if(todoid==todo.id)
  //     {
  //         nct = todo;
  //     }
  // })

  if (nct) {
    res.json(nct);
  } else {
    res.status(404).send();
  }
});

app.delete("/deletedata/:id", (req, res) => {
  var todoid = parseInt(req.params.id);
  var mct = _.findWhere(userdata, { id: todoid });

  if (!mct) {
    res.status(404).json({ errror: "id not matched" });
  } else {
    userdata = _.without(userdata, mct);
    res.json(mct);
  }
});

app.put("/updatedata/:id", middleware.requireAuth, (req, res) => {
  var todoid = parseInt(req.params.id);
  var mct = _.findWhere(userdata, { id: todoid });

  var body = _.pick(req.body, "taskname", "completed");

  var va = {};

  if (!mct) {
    res.status(404).json({ error: "id not matched" });
  } else {
    va.taskname = body.taskname;
    va.completed = body.completed;

    _.extend(mct, va);
    res.json(mct);
  }
});

app.listen(3000, function() {
  console.log("server is ready");
});
