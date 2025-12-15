const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    passwordHash: { type: String, required: true },
    role: { type: String, default: 'user' }, // 'user' or 'admin'
    balance: { type: Number, default: 0.00 }
});

module.exports = mongoose.model('User', UserSchema);
