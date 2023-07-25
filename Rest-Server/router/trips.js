const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { tripController } = require('../controllers');

// middleware that is specific to this router

router.get('/', tripController.getAllTrips);
router.post('/', auth(), tripController.createTrip);

router.get('/details/:tripId', auth(), tripController.getTrip);
router.put('/edit/:tripId', auth(), tripController.editTrip);
router.delete('/delete/:tripId', auth(), tripController.deleteTrip);
router.get('/search/:searchTerm', auth(), tripController.searchTrips);

//router.get('/:tripId/join', auth(), tripController.joinToTrip);
router.put('/:tripId', auth(), tripController.subscribeBuddie);

router.get('/establish', auth(), tripController.getAllCreatedTripsByUser);

//router.put('/:tripId', auth(), tripController.like);

module.exports = router;
