const { tripModel, userModel } = require('../models');

function getAllTrips(req, res, next) {
    tripModel.find()
        // .populate('userId')
        .then(trips => res.status(200).json(trips))
        .catch(next);
}

function getUserTrips(req, res, next) {
    const userId = req.params.userId;

    if (!userId) {
        return res.status(400).json({ message: 'User ID is required.' });
    }

    tripModel
        .find({ userId: userId })
        .lean() // Use .lean() to return plain JavaScript objects
        .then(trips => res.status(200).json(trips))
        .catch(next);
}



function createTrip(req, res, next) {
    const { startPoint, endPoint, date, time, imageUrl, brand, seats, price, description, _id: userId } = req.body;

    tripModel.create({ startPoint, endPoint, date, time, imageUrl, brand, seats, price, description, userId })
        .then((createdTrip) => {
            return userModel.updateOne({ _id: userId }, { $push: { trips: createdTrip._id } })
                .then(createdTrip => res.status(200).json(createdTrip))
                .catch(next);
        });

}

function getTrip(req, res, next) {
    const { tripId } = req.params;

    tripModel.findById(tripId)
        .populate('userId')
        .populate('buddies')
        .then(trip => res.json(trip))
        .catch(next);
}

function editTrip(req, res, next) {
    const { startPoint } = req.body;
    const { endPoint } = req.body;
    const { date } = req.body;
    const { time } = req.body;
    const { imageUrl } = req.body;
    const { brand } = req.body;
    const { seats } = req.body;
    const { price } = req.body;
    const { description } = req.body;
    const userId = req.body._id;
    const tripId = req.params.tripId;

    tripModel.findOneAndUpdate({ _id: tripId, userId }, { startPoint, endPoint, date, time, imageUrl, brand, seats, price, description }, { new: true })
        .then(updatedTrip => {
            if (updatedTrip) {
                res.status(200).json(updatedTrip);
            }
            else {
                res.status(401).json({ message: 'You are not allowed to edit this trip!' });
            }
        })
        .catch(next);
}

function deleteTrip(req, res, next) {
    const { tripId } = req.params;
    const { userId } = req.params;

    Promise.all([
        tripModel.findOneAndDelete({ _id: tripId, userId }),
        userModel.findOneAndUpdate({ _id: userId }, { $pull: { trips: tripId } }),

    ])
        .then(([deletedOne, _, __]) => {
            if (deletedOne) {
                res.status(200).json(deletedOne);
            } else {
                res.status(401).json({ message: 'You are not allowed to delete this trip!' });
            }
        })
        .catch(next);

}

function searchTrips(req, res, next) {
    const { searchTerm } = req.params;

    const searchResult = new RegExp(searchTerm, 'i');

    tripModel
        .find({
            $or: [
                { 'startPoint': { $regex: searchResult } },
                { 'endPoint': { $regex: searchResult } },
            ]
        })
        .lean()
        .then(trips => {
            res.status(200).json(trips);
        })
        .catch(next);
}

function joinToTrip(req, res, next) {
    const tripId = req.params.tripId;
    const userId = req.user.id;

    tripModel
        .findById(tripId)
        .then(trip => {
            if (trip.buddies.includes(userId)) {
                res.status(200).json({ alreadyJoined: true });
                return;
            }

            if (!trip.buddies.includes(userId)) {
                trip.seats -= 1;
                trip.buddies.push(userId);
            }
            
            // Save the modified trip first
            return trip.save();
        })
        .then(savedTrip => {
            // Now populate the buddies field in the saved trip
            return savedTrip.populate('buddies').execPopulate();
        })
        .then(updatedTripWithBuddies => {
            res.status(200).json(updatedTripWithBuddies);
        })
        .catch(error => {
            next(error);
        });
}

function getAllCreatedTripsByUser(req, res, next) {
    const { _id: userId } = req.user;
    const establish = true;
    tripModel.find({ userId, establish: establish })
        .then(trips => {
            console.log(trips);
            res.status(200).json(trips);
        })
        .catch(next);
}

module.exports = {
    getAllTrips,
    createTrip,
    getTrip,
    editTrip,
    deleteTrip,
    searchTrips,
    joinToTrip,
    getAllCreatedTripsByUser,
    getUserTrips,
};