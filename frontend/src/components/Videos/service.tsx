import axios from 'axios';
import { IVideo } from './IVideo';

const uri = process.env.URI || 'http://localhost:5000/videos';

export const getVideos = async () => {
	return await axios.get<IVideo[]>(uri);
};

export const createVideo = async (video: IVideo) => {
	return await axios.post(uri, video);
};

export const getVideo = async (id: string) => {
	return await axios.get<IVideo>(`${uri}/${id}`);
};

export const updateVideo = async (id: string, video: IVideo) => {
	return await axios.put<IVideo>(`${uri}/${id}`, video);
};

export const deleteVideo = async (id: string) =>
	await axios.delete(`${uri}/${id}`);
