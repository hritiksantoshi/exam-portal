const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const users = new Schema({
	firstName: { type: String, required: true, lowercase: true, index: true },
	lastName: { type: String, required: true, lowercase: true, index: true },
	email: { type: String, required: true },
	password: { type: String, default: null },
	mobileNumber: { type: String, required: true },
	userType: { type: String, required: true, enum: ['examiner','admin'] },
	subAdmin: { type: Schema.Types.ObjectId, default: null },
    image: { type: Schema.Types.ObjectId, default: null },
});

module.exports = mongoose.model('users', users);