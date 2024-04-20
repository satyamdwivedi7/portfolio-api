const Skill = require("../model/skills")


module.exports.createSkill = async (req, res) =>{
    const {title, skillSet} = req.body;
    console.log(req.body)
    try{
        const skill = new Skill({
            title, 
            skillSet
        })
        await skill.save()
        res.status(201).send(skill)
    }catch(err){
        console.log(err)
        res.status(400).send(err)
    }
}

module.exports.getSkill = async(req, res) =>{
    try {
      const skills = await Skill.find();
      res.status(200).send(skills);
    } catch (error) {
      res.status(400).send(error);
    }
}