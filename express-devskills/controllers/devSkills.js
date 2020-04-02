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

const newSkill = (req, res) => {
    res.render('devSkills/new')
}

const create = (req, res) => {
    console.log(req.body)
    DevSkill.create(req.body)
    res.redirect('devSkills')
}

const deleteSkill = (req, res) => {
    DevSkill.deleteOne(req.params.id)
    res.redirect('/devSkills')
}

module.exports = {
    index,
    show,
    newSkill,
    create, 
    deleteSkill
}