import { Router } from 'express';
import * as controller from './videos.controller';

const router = Router();

router.get('/videos', controller.getVideos);
router.post('/videos', controller.createVideo);
router.get('/videos/:id', controller.getVideo);
router.delete('/videos/:id', controller.deleteVideo);
router.put('/videos/:id', controller.updateVideo);

export default router;
