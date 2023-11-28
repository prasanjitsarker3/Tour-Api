import { Schema, model } from 'mongoose';
import { IReview } from '../interfaces/review.interface';

const reviewSchema = new Schema<IReview>({
  id: {
    type: String,
    required: [true, 'Id Is Required'],
  },
  review: {
    type: String,
    required: [true, 'Please tell us your review'],
  },
  rating: {
    type: Number,
    required: [true, 'Please tell us your rating'],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  tour: {
    type: Schema.Types.ObjectId,
    ref: 'Tour',
    required: [true, 'Please tell us your tour'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: [true, 'Please tell us your user'],
  },
});

const ReviewModel = model<IReview>('Review', reviewSchema);
export default ReviewModel;
