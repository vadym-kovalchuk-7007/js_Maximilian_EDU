// const { localsName } = require('ejs');
const express = require('express');
const router = express.Router();

const locationStorage = { locations: [] };

router.post('/add-location', (request, response, next) => {
	locationStorage.locations.push({
		address: request.body.address,
		data: (request.body.data),
	});
	response.json({ message: 'Data stored', id: locationStorage.locations.length - 1 });
	console.log(request.body);
});

router.get('/location/:id', (request, response, next) => {
	const pid = request.params.id;
	let result = locationStorage.locations.find((location, indx) => indx == pid);
	if (!result) {
		result = { message: 'Not found' };
		response.status(404);
	}
	response.json(result);
});

router.get('/locations', (_, response) => {
	response.json({ ids: locationStorage.locations.length });
});


module.exports = router;