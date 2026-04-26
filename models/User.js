const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  membership: { type: String, default: null },
  paymentStatus: { type: String, default: 'Pending' },
  joinDate: { type: Date, default: Date.now }
});

module.exports = mongoose.model('User', userSchema);