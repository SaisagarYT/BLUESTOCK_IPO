const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
  company: {
    type: String,
    required: true,
  },
  priceBand: {
    min: {
      type: Number,
      required: true,
      default:0
    },
    max: {
      type: Number,
      required: true,
      default:0
    },
  },
  openDate: {
    type: Date,
    required: true,
  },
  closeDate: {
    type: Date,
    required: true,
  },
  issueSize: {
    type: String,
    required: true,
  },
  issueType: {
    type: String,
    enum: ['Book Built', 'Fixed Price', 'Other'],
    required: true,
  },
  listingDate: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    enum: ['Ongoing', 'Closed', 'Upcoming'], 
    required: true,
  }
}, { timestamps: true });

module.exports = mongoose.model('Company',companySchema);