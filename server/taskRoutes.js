var express = require('express')
var router = express.Router()

var tasksDB = require('./db')

router.get('/', (req, res) => {
  let connection = req.app.get('connection')
  tasksDB.getTasks(connection)
    .then(tasks => {
      res.json(tasks)
    })
})

router.put('/:id', (req,res) => {
  let connection = req.app.get('connection')
  tasksDB.updateTask(connection, req.body)
  .then(() => {
    res.sendStatus(202)
  })
})

router.post('/', (req, res) => {

 let connection = req.app.get('db')
 tasksDB.addTask(connection, req.body)
   .then((task) => {
     res.status(201).json(task[0])
   })
})


module.exports = router
