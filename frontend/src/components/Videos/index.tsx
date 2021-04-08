import { useEffect, useState } from 'react';
import { IVideo } from './IVideo';
import { getVideos } from './service';
import VideoItem from './Video';

export default function VideoList() {
	const [videos, setVideos] = useState<IVideo[]>([]);

	const loadVideos = async () => {
		const res = await getVideos();
		const videos = res.data
			.map((video) => {
				return {
					...video,
					createdAt: video.createdAt
						? new Date(video.createdAt)
						: new Date(),
					updatedAt: video.updatedAt
						? new Date(video.updatedAt)
						: new Date(),
				};
			})
			.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());

		setVideos(videos);
	};

	useEffect(() => {
		loadVideos();
	}, []);

	return (
		<div className="row">
			{videos.map((video) => {
				return <VideoItem video={video} loadVideos={loadVideos} />;
			})}
		</div>
	);
}
