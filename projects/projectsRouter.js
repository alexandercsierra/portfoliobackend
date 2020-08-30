const router = require('express').Router();
const Projects = require('./projectsModel');
const restricted = require('../middleware/restricted')


router.get('/', (req, res)=>{
    Projects.getAll()
        .then(projectList => res.status(200).json(projectList))
        .catch(err=>{
            console.log(err);
            res.status(500).json({server_error: err})
        })
})

router.post('/', restricted, (req, res)=>{
    Projects.add(req.body)
        .then(project=>res.status(201).json({added: project}))
        .catch(err=>{
            console.log(err);
            res.status(500).json({server_error: err})
        })
    })

router.put('/:id', restricted, (req, res)=>{
    Projects.update(req.params.id, req.body)
        .then(project=>res.status(200).json({updated: project}))
        .catch(err=>{
            console.log(err);
            res.status(500).json({server_error: err})
        })
})

router.delete('/:id', restricted, (req, res)=>{
    Projects.delete(req.params.id)
        .then(project=>res.status(200).json({deleted: project}))
        .catch(err=>{
            console.log(err);
            res.status(500).json({server_error: err})
        })
})



module.exports=router;