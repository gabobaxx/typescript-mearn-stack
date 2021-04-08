import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { IVideo } from './IVideo';
import { createVideo, getVideo, updateVideo } from './service';
import { toast } from 'react-toastify';
import { useHistory, useParams } from 'react-router-dom';

type InputChange = ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

interface IParams {
	id: string;
}

function VideoForm() {
	const initialState = {
		title: '',
		description: '',
		url: '',
	};
	const [video, setVideo] = useState<IVideo>(initialState);

	const history = useHistory();
	const params = useParams<IParams>();

	const getVideoInfo = async (id: string) => {
		const res = await getVideo(id);
		const { title, description, url } = res.data;
		setVideo({ title, description, url });
	};

	useEffect(() => {
		if (params.id) getVideoInfo(params.id);
	}, [params.id]);

	const handleInputChange = (e: InputChange) => {
		setVideo({ ...video, [e.target.name]: e.target.value });
	};

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		if (!params.id) {
			await createVideo(video);
			toast.success('New video added');
			setVideo(initialState);
		} else {
			await updateVideo(params.id, video);
		}

		history.push('/');
	};

	return (
		<div className="row">
			<div className="col-md-4 offset-md-4">
				<div className="card">
					<div className="card-body">
						<h3>New Video</h3>
						<form onSubmit={handleSubmit}>
							<div className="form-group">
								<input
									autoFocus
									type="text"
									name="title"
									className="form-control"
									placeholder="Write a title for this video"
									onChange={handleInputChange}
									value={video.title}
								/>
							</div>
							<div className="form-group">
								<input
									type="text"
									name="url"
									className="form-control"
									placeholder="https://some-site.com"
									onChange={handleInputChange}
									value={video.url}
								/>
							</div>
							<div className="form-group">
								<textarea
									rows={3}
									name="description"
									className="form-control"
									placeholder="Write a description"
									onChange={handleInputChange}
									value={video.description}
								></textarea>
							</div>
							{params.id ? (
								<button className="btn btn-info">Update Video</button>
							) : (
								<button className="btn btn-primary">
									Create Video
								</button>
							)}
						</form>
					</div>
				</div>
			</div>
		</div>
	);
}

export default VideoForm;
