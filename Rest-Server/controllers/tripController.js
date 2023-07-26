const { tripModel, userModel } = require('../models');

// function newTrip(startPoint, endPoint, date, time, imageUrl, brand, seats, price, description, buddies, userId) {
//     return tripModel.create({ startPoint, endPoint, date, time, imageUrl, brand, seats, price, description, buddies, userId })
//         .then(trip => userModel.updateOne({ _id: userId }, { $push: { trips: trip._id }, $addToSet: { buddies: userId } }));
// }

// function getAllTrips(req, res, next) {
//     const { _id: userId } = req.user;

//     tripModel.find({ userId })
//         .sort({ created_at: -1 })
//         .then(trips => {
//             res.status(200).json(trips);
//         })
//         .catch(next);
// }

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
            return userModel.updateOne({ _id: userId }, { $push: { trips: createdTrip._id }})
           .then(createdTrip => res.status(200).json(createdTrip))
           .catch(next);
    });
   
}


function subscribeBuddie(req, res, next) {
    const tripId = req.params.tripId;
    const { _id: userId } = req.user;
    tripModel.findByIdAndUpdate({ _id: tripId }, { $addToSet: { buddies: userId } }, { new: true })
        .then(updatedTrip => {
            res.status(200).json(updatedTrip);
        })
        .catch(next);
}


function getTrip(req, res, next) {
    const { tripId } = req.params;

    tripModel.findById(tripId)
        // .populate({
        //     path: 'userId'
        // })
        .populate('userId')
        .populate('buddies')
        .then(trip => res.json(trip))
        .catch(next);
}

function editTrip(req, res, next) {
    const { _id: tripId } = req.body;
    const { startPoint } = req.body;
    const { endPoint } = req.body;
    const { date } = req.body;
    const { time } = req.body;
    const { imageUrl } = req.body;
    const { brand } = req.body;
    const { seats } = req.body;
    const { price } = req.body;
    const { description } = req.body;
    const { _id: userId } = req.user;
    const { buddies } = req.body;

    tripModel.findOneAndUpdate({ _id: tripId, userId }, { startPoint, endPoint, date, time, imageUrl, brand, seats, price, description, buddies }, { new: true })
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
    const { _id: userId } = req.user;

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

// function searchTrips(req, res, next){
//     const { _id: userId } = req.user;
//     const { searchTerm } = req.params;

//     const searchResult = new RegExp(searchTerm, 'i');

//     tripModel.find({userId}).or([{'startPoint': {$regex: searchResult}}, {'endPoint': {$regex: searchResult}}, {'date': {$regex: searchResult}}]).lean()
//     .then(trips => {
//         res.status(200).json(trips);
//     })
//     .catch(next);
// }
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
    const { _id: userId } = req.user;

    tripModel
        .findById(tripId)
        .then(trip => {
            if (trip.buddies.includes(userId)) {
                throw new Error('User is already a buddy');
            }

            if (!trip.buddies.includes(userId)) {
                trip.buddies.push(userId);
            }

            return trip.save();
        })
        .then(updatedTrip => {
            res.status(200).json(updatedTrip);
        })
        .catch(error => {
            next(error);
        });
}

//   function like(req, res, next) {
//     const { tripId } = req.params;
//     const { _id: userId } = req.user;

//     console.log('like');

//     tripModel.updateOne({ _id: tripId }, { $addToSet: { likes: userId } }, { new: true })
//         .then(() => res.status(200).json({ message: 'Liked successful!' }))
//         .catch(next);
// }

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
    subscribeBuddie,
    getUserTrips
};