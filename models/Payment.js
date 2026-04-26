const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  plan: { type: String, required: true },
  amount: { type: Number, required: true },
  status: { type: String, default: 'Completed' },
  date: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Payment', paymentSchema);