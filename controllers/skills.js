import * as skillDb from "../data/skill-db.js"

function index(req, res, next) {
  skillDb.find({}, function(error, skills) {
    res.render('skills/index', {
      skills: skills,
      error: error
    })
  })
}

function show(req, res) {
  // console.log(req.params.id)
  skillDb.findById(req.params.id, function(error, skill) {
    res.render("skills/show", {
      skill: skill,
      error: error
    })
  })
}
export {
  index,
  show
}
