const express = require('express');
const router = express.Router();

const locationStorage = { locations: [] };
let id = 0;

router.post('/add-location', (request, response, next) => {
	id++;
	locationStorage.locations.push({
		id,
		address: request.body.address,
		data: (request.body.data),
	});
	response.json({ message: 'Data stored', id });
	console.log(request.body);
});

router.get('/location/:id', (request, response, next) => {
	const pid = request.params.id;
	let result = locationStorage.locations.find(location => location.id === pid);
	if (!result) {
		result = { message: 'Not found' };
	}
	response.status(404).json(result);
});


module.exports = router;