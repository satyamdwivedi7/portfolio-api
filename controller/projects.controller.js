const Project = require("../model/projects");

// module.exports.setPath = (req, res, next) => {
//   req.dir = process.cwd()+ "/public/projects";
//   console.log(req.dir);
//   next();
// };

module.exports.createProject = async (req, res) => {
  console.log(req.body);
  const { title, description, techStack, github, live, image } = req.body;
  console.log(req.body);
  // if(!req.file) return res.status(400).send("Please upload a file");
  //   console.log("aya bhai")
  //   const image = req.file.filename;
  //   console.log(image);
  try {
    const project = new Project({
      title,
      description,
      techStack,
      github,
      live,
      image,
    });
    console.log("p", project);
    await project.save();
    res.status(201).send(project);
  } catch (error) {
    console.log(error);
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
      const projects = await Project.find().limit(4).sort({ createdAt: -1 });
      res.status(200).send(projects);
    } catch (error) {
      res.status(400).send(error);
    }
  }
};
