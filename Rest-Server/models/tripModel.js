const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

const pattern = /^https?:\/\/.+$/gi;
const tripSchema = new mongoose.Schema({
   
    startPoint: {
		type: String,
		required: [true, 'Start point is required!'],
		minLength: [3, 'The starting point should be at least 3 characters long!'],
	},
	endPoint: {
		type: String,
		required: [true, 'End point is required!'],
		minLength: [3, 'The end point should be at least 3 characters long!'],
	},
	date: {
		type: String,
		required: [true, 'Date is required!'],
	},
	time: {
		type: String,
		required: [true, 'Time is required!'],
	},
	imageUrl: {
		type: String,
		required: [true, 'Image is required!'],
		match: [pattern, 'The Image should start with http:// or https://'],
	},
	brand: {
		type: String,
		required: [true, 'Brand is required!'],
		minLength: [3, 'The car brand should be minimum 3 characters long!'],
	},
	seats: {
		type: Number,
		required: [true, 'Seats number is required!'],
		min: [0, 'The Seats should be positive number (from 0 to 4 inclusive).'],
		max: [4, 'The Seats should be positive number (from 0 to 4 inclusive).'],
	},
	price: {
		type: Number,
		required: [true, 'Price is required!'],
		// min: [1, 'The Price should be a positive number.'],
		// max: [50, 'The Price should be a positive number.'],
	},
	description: {
		type: String,
		required: [true, 'Description is required!'],
		minLength: [10, 'The Description should be a minimum of 10 characters long!'],
	},
    userId: { //this is the creator
        type: ObjectId,
        ref: 'User'
    },
    buddies: [{
        type: ObjectId,
        // type: [mongoose.Types.ObjectId],
        ref: 'User'
    }],
    
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Trip', tripSchema);