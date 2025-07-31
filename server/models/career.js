import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      lowercase: true,
    },
    phoneNumber: {
      type: String,
      required: true,
    },
    jobRole: {
      type: String,
      required: true,
    },
    resumeUrl: {
      type: String,
      required: true,
    },
    message: {
      type: String,
      default: '',
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Career', careerSchema);
