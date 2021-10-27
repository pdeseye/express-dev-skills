import { Router } from 'express'
import * as skillsCtrl from "../controllers/skills.js"
const router = Router()

/* GET todos listing. */

// localhost:3000/todos
router.get('/', skillsCtrl.index)
// localhost:3000/todos/:id
router.get("/:id", skillsCtrl.show)

export {
  router
}
