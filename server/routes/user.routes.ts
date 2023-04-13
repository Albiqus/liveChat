const Router = require('express')
const router = new Router()
const userController = require('../controllers/user.controller')


router.post('/createUser', userController.createUser)
router.get('/user', userController.getUsers)
router.get('/authUser', userController.authUser)
router.put('/user', userController.updateUser)
router.delete('/user', userController.deleteUser)

module.exports = router