const express = require('express')
const router = express.Router()
const courseController = require('../app/controllers/CourseController')

router.get('/create', courseController.create)
router.get('/:slug', courseController.show)
router.post('/store', courseController.store)

router.get('/:id/edit', courseController.edit)
router.put('/:id', courseController.update)

router.delete('/:id', courseController.delete1)

router.patch('/:id/restore', courseController.restore)
router.delete('/:id/force', courseController.delete2)

module.exports = router