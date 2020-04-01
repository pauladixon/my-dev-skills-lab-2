const DevSkill = require('../models/devSkill')

const index = (req, res, next) => {
    res.render('devSkills/index', {
        devSkills: DevSkill.getAll(),
        time: req.time
    })
}

module.exports = {
    index
}