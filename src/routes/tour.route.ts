import express from 'express';
import { tourController } from '../controllers/tour.controller';
const router = express.Router();

router.post('/create-tour', tourController.createTour);
router.get('/all-tour', tourController.getAllTour);
router.get('/single-tour/:id', tourController.getSingleTour);
router.patch('/update-tour/:id', tourController.getUpdateTour);
router.delete('/delete-tour/:id', tourController.getDeletedTour);

export const tourRoutes = router;
