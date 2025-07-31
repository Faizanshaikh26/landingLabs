import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: true,
    trim: true
  },
  phoneNumber: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
    trim: true
  },
  service: {
    type: String,
    required: true,
    trim: true
  },
  serviceDescription: {
    type: String,
    trim: true
  },
  message: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;
