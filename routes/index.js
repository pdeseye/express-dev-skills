import { Router } from 'express'
const router = Router()

/* GET skills page. */

//localhost:3000/skills
router.get('/', function(req, res) {
  res.render('index', { title: 'Express Skills' })
})

export { 
  router
}
