const router = require('express').Router();

const { validateUserInfo } = require('../middlewares/validation');
const {
  updateUser,
  getCurrentUser,
} = require('../controllers/users');

router.get('/me', getCurrentUser);
router.patch('/me', validateUserInfo, updateUser);

module.exports = router;
