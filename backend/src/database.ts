import mongoose, { ConnectOptions } from 'mongoose';
import config from './config';

const uri = `mongodb://${config.MONGO_HOST}/${config.MONGO_DATABASE}`;
const opts: ConnectOptions = {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	// user: config.MONGO_USER,
	// pass: config.MONGO_PASSWORD
};

(async () => {
	try {
		const db = await mongoose.connect(uri, opts);
		console.log('db is connected to ->', db.connection.name);
	} catch (error) {
		console.error(error);
	}
})();
