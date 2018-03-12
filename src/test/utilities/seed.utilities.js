import request from 'request';
import database from '../../server/model/database';

export default function seedTrailsTable() {
	const requestURL = 'https://www.hikingproject.com/data/get-trails?lat=37.7749295&lon=-122.4194155&maxDistance=10&maxResults=20&key=';

	request.get(requestURL, {}, (error, response, body) => {
		if (!error && response.statusCode === 200) {
			console.log(body);
		}
	});
}

seedTrailsTable();
