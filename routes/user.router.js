const Router = require('express');
const router = new Router();
const Controller = require('../controllers/user.controller');

router.post('/user', Controller.createUser);
router.get('/user', Controller.getUsers);
router.get('/user/:id', Controller.getOneUser);
router.put('/user', Controller.updateUser);
router.delete('/user/:id', Controller.deleteUser);

module.exports = router;
