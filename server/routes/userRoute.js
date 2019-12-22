const router = require("express").Router();
const verify = require('../middleware/verify')
const UserController = require('../controllers/UserController');

router.post('/signup', UserController.signup);
router.post("/login", UserController.login);
router.get('/:username', verify, UserController.getByUsername);

module.exports = router;