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


module.exports = {
    getAll,
    getOne
}
