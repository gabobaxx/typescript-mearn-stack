import { config } from 'dotenv';
config();

export default {
	MONGO_USER: process.env.MONGO_USER || 'admin',
	MONGO_PASSWORD: process.env.MONGO_PASSWORD || 'admin',
	MONGO_HOST: process.env.MONGO_HOST || 'localhost',
	MONGO_DATABASE: process.env.MONGO_DATABASE || 'mearn-stack-typescript',
	PORT: process.env.PORT || 4000,
};
