const Project = require("../model/projects");

module.exports.createProject = async (req, res) => {
  const { title, description, techStack, github, live, image } = req.body;
  try {
    const project = new Project({
      title,
      description,
      techStack,
      github,
      live,
      image,
    });
    await project.save();
    res.status(201).send(project);
  } catch (error) {
    console.error(error);
    res.status(400).send(error);
  }
};

module.exports.getProjects = async (req, res) => {
  const { filter } = req.query;
  if (filter == "all") {
    try {
      const projects = await Project.find().sort({ createdAt: -1 });
      res.status(200).send(projects);
    } catch (error) {
      res.status(400).send(error);
    }
  } else {
    try {
      const projects = await Project.find().sort({ createdAt: -1 }).limit(4);
      res.status(200).send(projects);
    } catch (error) {
      res.status(400).send(error);
    }
  }
};
