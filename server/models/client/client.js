import mongoose from 'mongoose';

const ServiceSchema = new mongoose.Schema({
  serviceName: {
    type: String,
    required: true
  },
  durationInMonths: {
    type: Number,
    required: true
  },
  startDate: {
    type: Date,
    required: true
  },
  endDate: {
    type: Date // Auto-calculated before save
  }
}, { _id: false });



const PaymentSchema = new mongoose.Schema({
  hasPayment: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['pending', 'completed', 'failed'],
    default: 'pending'
  },
  method: {
    type: String,
    enum: ['card', 'upi', 'paypal', 'bank_transfer']
  },
  amount: Number,
  currency: {
    type: String,
    default: 'USD'
  },
  transactionId: String,
  invoiceUrl: String
}, { _id: false });

const ClientSchema = new mongoose.Schema({
  // Basic Info
  name: {
    type: String,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true,
    unique:true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  company: {
    type: String,
    trim: true
  },
  projectDetails: {
    type: String,
    required: true
  },
  budget: {
    type: String,
    enum: ['< $500', '$500 - $1000', '$1000 - $5000', '$5000+'],
    required: true
  },

  // Services Info
  services: [ServiceSchema],

  // Payment Info
  payment: PaymentSchema,

  // Subscription Status (Optional)
  isSubscribed: {
    type: Boolean,
    default: false
  },

  // Timestamp
  createdAt: {
    type: Date,
    default: Date.now
  }
});

ClientSchema.pre('save', function (next) {
  this.services.forEach(service => {
    if (service.startDate && service.durationInMonths && !service.endDate) {
      const end = new Date(service.startDate);
      end.setMonth(end.getMonth() + service.durationInMonths);
      service.endDate = end;
    }
  });

  // Auto-set isSubscribed if any service is active
  const now = new Date();
  this.isSubscribed = this.services.some(service =>
    service.startDate <= now && service.endDate >= now
  );

  next();
});


export default mongoose.models.Client || mongoose.model('Client', ClientSchema);
