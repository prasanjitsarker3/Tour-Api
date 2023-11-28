import { Request, Response } from 'express';
import { tourServices } from '../services/tour.service';

const createTour = async (req: Request, res: Response) => {
  try {
    const tourData = req.body;
    const result = await tourServices.createTour(tourData);
    res.status(201).json({
      status: 'success',
      message: 'Tour created successfully',
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    });
  }
};
const getAllTour = async (req: Request, res: Response) => {
  try {
    const result = await tourServices.getAllTour();
    res.status(201).json({
      status: 'success',
      message: 'All Tour Fetched successfully',
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    });
  }
};
const getSingleTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const result = await tourServices.getSingleTour(id);
    res.status(201).json({
      status: 'success',
      message: 'Single Tour Fetched successfully',
      data: result,
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    });
  }
};
const getUpdateTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    const tourData = req.body;
    await tourServices.getUpdateTour(id, tourData);
    res.status(201).json({
      status: 'success',
      message: 'Tour Update successfully',
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    });
  }
};

const getDeletedTour = async (req: Request, res: Response) => {
  try {
    const id = req.params.id;
    await tourServices.getDeleteTour(id);
    res.status(201).json({
      status: 'success',
      message: 'Tour Deleted successfully',
    });
  } catch (error: any) {
    console.log(error);
    res.status(500).json({
      status: 'fail',
      message: error.message || 'Something went wrong',
    });
  }
};

export const tourController = {
  createTour,
  getAllTour,
  getSingleTour,
  getUpdateTour,
  getDeletedTour,
};
