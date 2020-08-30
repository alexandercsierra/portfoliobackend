const router = require('express').Router();
const authRouter = require('../auth/authRouter');
const projectsRouter = require('../projects/projectsRouter')
const coursesRouter = require('../courses/coursesRouter')

router.use('/auth', authRouter)
router.use('/projects', projectsRouter)
router.use('/courses', coursesRouter)


router.get('/', (req, res)=>{
    res.status(200).json({message: 'Welcome to the API router'})
})

module.exports=router;
