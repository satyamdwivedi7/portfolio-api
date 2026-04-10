const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema({
  title: { type: String, required: true },
  issuer: { type: String, required: true },
  issuedDate: 'String',
  credentialUrl: 'String',
  category: { type: String, required: true },
  icon: 'String',
  order: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const Certification = mongoose.model('Certification', certificationSchema);
module.exports = Certification;
