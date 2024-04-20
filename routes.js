const { Router } = require("express");
const router = Router();

const {
  createProject,
  getProjects,
  setPath,
} = require("./controller/projects.controller");
const secretMiddleware = require("./middleware/secret.middlleware");
// const uplaoder = require("./middleware/upload.middleware");

const {createSkill, getSkill} = require("./controller/skills.controller");

router.get("/", (req, res) => {
  res.send("API is running successfully");
});
router.post(
  "/naya-project",
  secretMiddleware,
  // setPath,
  // uplaoder.single("image"),
  createProject
);
router.get("/projects", getProjects);
module.exports = router;

router.post('/new-skillset', secretMiddleware, createSkill)
router.get('/skills', getSkill);