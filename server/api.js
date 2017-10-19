'use strict'
const chalk = require('chalk')
const api = require('express').Router()
const db = require('../db')
const {Student, Campus} = require('../db/models')

// If you aren't getting to this object, but rather the index.html (something with a joke) your path is wrong.
	// I know this because we automatically send index.html for all requests that don't make sense in our backend.
	// Ideally you would have something to handle this, so if you have time try that out!

// CAMPUS ROUTES ********************************************************************

// GET ALL CAMPUSES : /api/campuses
api.get('/campuses', (req, res, next) => {
	Campus.findAll()
	.then(data => { res.json(data) })
	.catch(next)
})

// POST CAMPUS
api.post('/campuses', (req, res, next) => {
	Campus.create(req.body)
	.then(campus => {
		console.log("Campus Posted!")
		res.json(campus)
	})
	.catch(next)
})

// HANDLING ONE CAMPUS
api.param('campusId', (req, res, next, id) => {
	Campus.findById(id)
	.then(campus => {            // array only contains one campus instance
		if(!campus) {            // when campus with that id does NOT exist
			console.log("Campus Does NOT Exist")
			res.sendStatus(404)
		}
		req.campus = campus     
		next()                   // id is captured and can now move on to other routes
	})
})

// GET CAMPUS BY ID
api.get('/campuses/:campusId', (req, res, next) => {
	res.json(req.campus)
})

// UPDATE CAMPUS
api.put('/campuses/:campusId', (req, res, next) => {
	req.campus.update(req.body)
	.then(campus => {
		console.log("Updated Campus!")
		res.json(campus)
	})
	.catch(next)
})

// DELETE CAMPUS
api.delete('/campuses/:campusId', (req, res, next) => {
	req.campus.destroy()
	.then(data => { console.log(chalk.red(" Deleted Campus :( ")) })
	.catch(next)
})

// STUDENT ROUTES *******************************************************************

// GET ALL STUDENTS : /api/students
api.get('/students', (req, res, next) => {
	Student.findAll({
		include: [{ all: true, nested: true }]
	})
	.then(data => { res.json(data) })
	.catch(next)
})

// POST STUDENT
api.post('/students', (req, res, next) => {
	Student.create(req.body)
	.then(student => {
		console.log("Student Enrolled!")
		res.json(student)
	})
	.catch(next)
})

// HANDLING ONE STUDENT
api.param('studentId', (req, res, next, id) => {
	Student.findById(id)
	.then(student => {            // array only contains one student instance
		if(!student) {            // when student with that id does NOT exist
			console.log("Student Does NOT Exist")
			res.sendStatus(404)
		}
		req.student = student   
		next()                   // id is captured and can now move on to other routes
	})
})

// GET STUDENT BY ID
api.get('/students/:studentId', (req, res, next) => {
	res.json(req.student)
})

// UPDATE STUDENT
api.put('/students/:studentId', (req, res, next) => {
	req.student.update(req.body)
	.then(student => {
		console.log(chalk.blue.bgWhite("Updated Student!"))
		res.json(student)
	})
	.catch(next)
})

// DELETE STUDENT
api.delete('/students/:studentId', (req, res, next) => {
	req.student.destroy()
	.then(data => { console.log(chalk.bgRed(" Deleted Student :( ")) })
	.catch(next)
})


module.exports = api