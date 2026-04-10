const { Router } = require("express");
const router = Router();

const {
  createProject,
  getProjects,
} = require("./controller/projects.controller");
const secretMiddleware = require("./middleware/secret.middlleware");

const { createSkill, getSkill } = require("./controller/skills.controller");
const { sendMail } = require("./mail/mail");

const {
  createCertification,
  getCertifications,
} = require("./controller/certifications.controller");

router.get("/", (req, res) => {
  res.send("API is running successfully");
});
router.post("/naya-project", secretMiddleware, createProject);
router.get("/projects", getProjects);

router.post("/new-skillset", secretMiddleware, createSkill);
router.get("/skills", getSkill);

router.post("/sendmail", secretMiddleware, async (req, res) => {
  try {
    const { to, name, messageFromVisitor } = req.body;
    await sendMail(to, name, messageFromVisitor);
    res.status(200).json({ message: "Mail sent" });
  } catch (e) {
    res.status(500).json({ message: e.message });
  }
});

router.get("/certifications", getCertifications);
router.post("/new-certification", secretMiddleware, createCertification);

module.exports = router;
