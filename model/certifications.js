const mongoose = require('mongoose');

const certificationSchema = new mongoose.Schema({
  title: 'String',
  issuer: 'String',
  issuedDate: 'String',
  credentialUrl: 'String',
  category: 'String',
  icon: 'String',
  order: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const Certification = mongoose.model('Certification', certificationSchema);
module.exports = Certification;
