var express = require('express');
var router = express.Router();


const devSkillsCtrl = require('../controllers/devSkills')
router.get('/', devSkillsCtrl.index)

module.exports = router
