const skills = [
  {text: 'JavaScript', done: true, _id: 125223},
  {text: 'HTML', done: true, _id: 127904},
  {text: 'CSS', done: true, _id: 139614},
  {text: 'NodeJs', done: false, _id: 159608},
  {text: 'Express', done: false, _id: 179608},
]

const find = (conditions, callback) => {
  // see if this works, if not, execute the code in the catch block
  try {
    // make sure that conditions is an object - if not throw a TypeError
    if (!(conditions instanceof Object)){
      throw new TypeError('Please pass in an object')
    }
    // If the object is empty, return all the skills
    if (Object.keys(conditions).length === 0) return callback(null, skills)
	// deal with errors
  } catch (error) {
    console.log(error)
    callback(error, [])
  }
}

const findById = (id, callback) =>{
  try {
    const skill = skills.find(skill => skill._id === parseInt(id))
    if (!skill) throw new Error ('No skill was found')
    return callback(null, skill)
  } catch (error) {
    console.log(error)
    return callback(error, null)
  }
}

function create(skill, callback) {
  console.log(skill)
  skill._id = Date.now() % 1000000
  skill.done = false
  console.log(skill)
  skills.push(skill)
  return callback(null, skill)
}


function findByIdAndDelete(id, callback) {
  try { 
    // Find the index based on the _id of the todo object
    const idx = skills.findIndex(skill => skill._id == parseInt(id))
    const deletedSkill = skills.splice(idx, 1)
    if (!deletedSkill.length ) throw new Error ('No skill was deleted')
    return callback(null, deletedSkill[0])
  } catch(error) {
    return callback(error, null)
  }
}

export { 
	find,
  findById,
  create,
  findByIdAndDelete,
}