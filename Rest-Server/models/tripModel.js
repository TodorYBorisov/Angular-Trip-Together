const mongoose = require('mongoose');
const { ObjectId } = mongoose.Schema.Types;

// const pattern = /^https?:\/\/.+$/gi;
const tripSchema = new mongoose.Schema({
   
    startPoint: {
		type: String,
		required: [true, 'Start point is required!'],
		minLength: [3, 'Starting point should be at least 3 characters long!'],
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
	},
	brand: {
		type: String,
		required: [true, 'Brand is required!'],
		minLength: [2, 'The car brand should be minimum 2 characters long!'],
	},
	seats: {
		type: Number,
		required: [true, 'Seats number is required!'],
		min: [0, 'Seats must be a positive number!'],
	},
	price: {
		type: Number,
		required: [true, 'Price is required!'],
		min: [0, 'Price must be a positive number!'],

	},
	description: {
		type: String,
		required: [true, 'Description is required!'],
		minLength: [15, 'Description must be at least 15 haracters long!'],
	},
    userId: { //this is the creator
        type: ObjectId,
        ref: 'User'
    },
    buddies: [{
        type: ObjectId,
        ref: 'User'
    }],
    
}, { timestamps: { createdAt: 'created_at' } });

module.exports = mongoose.model('Trip', tripSchema);