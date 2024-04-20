const mongoose = require('mongoose')

const skillsSchema = new mongoose.Schema({
    title: 'String', 
    skillSet: ['String']
})

const Skill = mongoose.model("Skill", skillsSchema);
module.exports = Skill;