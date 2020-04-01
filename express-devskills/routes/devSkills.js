var express = require('express');
var router = express.Router();


const devSkillsCtrl = require('../controllers/devSkills')
router.get('/', devSkillsCtrl.index)
router.get('/new', devSkillsCtrl.newSkill)
router.get('/:id', devSkillsCtrl.show)

module.exports = router
