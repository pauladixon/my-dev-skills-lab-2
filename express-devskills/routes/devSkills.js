var express = require('express');
var router = express.Router();


const devSkillsCtrl = require('../controllers/devSkills')
router.get('/', devSkillsCtrl.index)
router.get('/:id', devSkillsCtrl.show)

module.exports = router
