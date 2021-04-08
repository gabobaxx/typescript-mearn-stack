// styles
import './video.css';
import { IVideo } from './IVideo';
import ReactPlayer from 'react-player';
import { useHistory } from 'react-router';
import { deleteVideo} from './service';

interface IProps {
	video: IVideo;
	loadVideos: () => void;
}

const VideoItem = ({ video, loadVideos }: IProps) => {
	const history = useHistory();

	const handleDelete = async (id: string) => {
		await deleteVideo(id);
		loadVideos();
	};

	return (
		<div key={video._id} className="col-md-4">
			<div className="card card-body video-card">
				<div className="d-flex justify-content-between">
					<h1 onClick={() => history.push(`/update/${video._id}`)}>
						{video.title}
					</h1>
					<span
						className="text-danger"
						onClick={() => video._id && handleDelete(video._id)}
					>
						X
					</span>
				</div>
				<p>{video.description}</p>
				<div className="embed-responsive embed-responsive-16by9">
					<ReactPlayer url={video.url} />
				</div>
			</div>
		</div>
	);
};

export default VideoItem;
