const Certification = require('../model/certifications');

module.exports.createCertification = async (req, res) => {
  const { title, issuer, issuedDate, credentialUrl, category, icon, order } = req.body;
  try {
    const certification = new Certification({
      title,
      issuer,
      issuedDate,
      credentialUrl,
      category,
      icon,
      order: order || 0,
    });
    await certification.save();
    res.status(201).send(certification);
  } catch (err) {
    console.log(err);
    res.status(400).send(err);
  }
};

module.exports.getCertifications = async (req, res) => {
  try {
    const certifications = await Certification.find().sort({ order: 1 });
    res.status(200).send(certifications);
  } catch (error) {
    res.status(400).send(error);
  }
};
