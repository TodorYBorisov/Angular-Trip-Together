const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { tripController } = require('../controllers');

// middleware that is specific to this router

router.get('/', tripController.getAllTrips);
router.post('/', tripController.createTrip);
router.get('/:userId', tripController.getUserTrips);
router.get('/search/:searchTerm', tripController.searchTrips);
router.get('/details/:tripId', tripController.getTrip);

router.put('/edit/:tripId', tripController.editTrip);
router.delete('/delete/:tripId/:userId', tripController.deleteTrip);

//router.get('/:tripId/join', auth(), tripController.joinToTrip);
router.put('/:tripId', tripController.subscribeBuddie);

router.get('/establish', tripController.getAllCreatedTripsByUser);

//router.put('/:tripId', auth(), tripController.like);

module.exports = router;
