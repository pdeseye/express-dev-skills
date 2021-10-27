import { Router } from 'express'
import * as skillsCtrl from "../controllers/skills.js"
const router = Router()

/* GET todos listing. */

// localhost:3000/todos
router.get('/', skillsCtrl.index)

// localhost:3000/todos/new - GET
router.get("/new", skillsCtrl.new)

// localhost:3000/todos/:id
router.get("/:id", skillsCtrl.show)

// localhost:3000/todos - POST
router.post("/", skillsCtrl.create)

// localhost:3000/todos/:id - DELETE
router.delete("/:id", skillsCtrl.delete)

export {
  router
}
