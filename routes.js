const { Router } = require("express");
const router = Router();

const {
  createProject,
  getProjects,
  updateProject,
  deleteProject,
  setPath,
} = require("./controller/projects.controller");
const secretMiddleware = require("./middleware/secret.middlleware");
const uplaoder = require("./middleware/upload.middleware");

router.get("/", (req, res) => {
  res.send("API is running successfully");
});
router.post(
  "/naya-project",
  secretMiddleware,
  setPath,
  uplaoder.single("image"),
  createProject
);
router.get("/projects", getProjects);
module.exports = router;
