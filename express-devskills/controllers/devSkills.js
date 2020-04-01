const DevSkill = require('../models/devSkill')

const index = (req, res, next) => {
    res.render('devSkills/index', {
        devSkills: DevSkill.getAll(),
        time: req.time
    })
}

const show = (req, res) => {
    res.render('devSkills/show', {
        devSkill: DevSkill.getOne(req.params.id),
        id: parseInt(req.params.id)
    })
}

module.exports = {
    index,
    show
}