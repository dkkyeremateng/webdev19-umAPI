const mongoose = require('mongoose');
const Joi = require('joi');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		minlength: 3,
		maxlength: 50
	},
	age: {
		type: Number,
		required: true
	},
	gender: {
		type: String,
		required: true,
		minlength: 1,
		maxlength: 1
	}
});

const User = mongoose.model('User', userSchema);

function validateUser(user) {
	const schema = {
		name: Joi.string()
			.min(3)
			.max(50)
			.required(),
		age: Joi.number().required(),
		gender: Joi.string()
			.max(1)
			.min(1)
			.required()
	};
	return Joi.validate(user, schema);
}

exports.User = User;
exports.validate = validateUser;
