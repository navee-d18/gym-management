const express = require('express');
const User = require('../models/User');
const Payment = require('../models/Payment');
const auth = require('../middleware/auth');

const router = express.Router();

// Purchase membership
router.post('/purchase', auth, async (req, res) => {
  const { plan } = req.body;
  const prices = { Basic: 999, Premium: 1999, 'Ultra Premium': 2999 };
  try {
    const user = await User.findById(req.user.id);
    user.membership = plan;
    user.paymentStatus = 'Completed';
    await user.save();

    const payment = new Payment({ user: req.user.id, plan, amount: prices[plan] });
    await payment.save();

    res.json({ msg: 'Purchase successful' });
  } catch (err) {
    res.status(500).json({ msg: 'Server error' });
  }
});

module.exports = router;