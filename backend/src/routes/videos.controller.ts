import { RequestHandler, Response, Request } from 'express';
import Video from './Video';

export const createVideo: RequestHandler = async (
	req: Request,
	res: Response
) => {
	try {
		const videoFound = await Video.findOne({ url: req.body.url });
		if (videoFound)
			return res
				.status(302)
				.json({ message: 'Video already exists', videoFound });
		const video = new Video(req.body);
		const savedVideo = await video.save();
		res.status(201).json({
			message: 'Video saved',
			savedVideo,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Error' });
	}
};
export const getVideos: RequestHandler = async (_: Request, res: Response) => {
	try {
		const videos = await Video.find();
		res.status(200).json(videos);
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Error' });
	}
};
export const getVideo: RequestHandler = async (req: Request, res: Response) => {
	const video = await Video.findById(req.params.id);
	if (!video) return res.status(404).json({ message: 'video not found' });
	res.status(202).json(video);
};
export const deleteVideo: RequestHandler = async (
	req: Request,
	res: Response
) => {
	const videoDeleted = await Video.findByIdAndDelete(req.params.id);
	if (!videoDeleted)
		return res.status(404).json({ message: 'video not found' });
	res.status(200).json({ message: 'Video deleted', videoDeleted });
};
export const updateVideo: RequestHandler = async (
	req: Request,
	res: Response
) => {
	try {
		const video = await Video.findByIdAndUpdate(req.params.id, req.body, {
			new: true,
		});

		if (!video)
			return res.status(404).json({ message: 'Video to update not found' });

		res.status(200).json({
			message: 'Video updated',
			video,
		});
	} catch (error) {
		console.error(error);
		res.status(500).json({ message: 'Internal Error' });
	}
};
