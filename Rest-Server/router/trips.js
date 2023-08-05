const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { tripController } = require('../controllers');
const { addUserData } = require('../utils/addUserData');

router.get('/', tripController.getAllTrips);
router.post('/', tripController.createTrip);
router.get('/:userId', tripController.getUserTrips);
router.get('/search/:searchTerm', tripController.searchTrips);
router.get('/details/:tripId', tripController.getTrip);
router.put('/edit/:tripId', tripController.editTrip);
router.delete('/delete/:tripId/:userId', tripController.deleteTrip);
router.put('/details/:tripId', addUserData, tripController.joinToTrip);
router.get('/establish', tripController.getAllCreatedTripsByUser);

module.exports = router;