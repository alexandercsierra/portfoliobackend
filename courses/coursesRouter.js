const router = require('express').Router();
const Courses = require('./coursesModel');
const restricted = require('../middleware/restricted')

router.get('/', (req, res)=>{
    Courses.getAll()
        .then(courseList => res.status(200).json(courseList))
        .catch(err=>{
            console.log(err);
            res.status(500).json({server_error: err})
        })
})

router.post('/', restricted, (req, res)=>{
    Courses.add(req.body)
        .then(course=>res.status(201).json({added: course}))
        .catch(err=>{
            console.log(err);
            res.status(500).json({server_error: err})
        })
    })

router.put('/:id', restricted, (req, res)=>{
    Courses.update(req.params.id, req.body)
        .then(course=>res.status(200).json({updated: course}))
        .catch(err=>{
            console.log(err);
            res.status(500).json({server_error: err})
        })
})

router.delete('/:id', restricted, (req, res)=>{
    Courses.delete(req.params.id)
        .then(course=>res.status(200).json({deleted: course}))
        .catch(err=>{
            console.log(err);
            res.status(500).json({server_error: err})
        })
})



module.exports=router;