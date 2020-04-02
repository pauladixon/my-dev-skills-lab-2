const devSkills = [
    {devSkill: "HTML", learned: true},
    {devSkill: "CSS", learned: true},
    {devSkill: "Javascript", learned: true},
    {devSkill: "Express", learned: false},
]

const getAll = () => {
    return devSkills
}

const getOne = (id) => {
    return devSkills[id]
}

const create = (devSkill) => {
    devSkills.push(devSkill)
}

const deleteOne = (id) => {
    devSkills.splice(id, 1)
}
module.exports = {
    getAll,
    getOne, 
    create, 
    deleteOne
}
