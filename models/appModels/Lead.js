// const mongoose = require('mongoose');
// mongoose.Promise = global.Promise;

// const leadSchema = new mongoose.Schema({
//   removed: {
//     type: Boolean,
//     default: false,
//   },
//   enabled: {
//     type: Boolean,
//     default: true,
//   },
//   firstName: {
//     type: String,
//     trim: true,
//     required: true,
//   },
//   lastName: {
//     type: String,
//     trim: true,
//     required: true,
//   },
//   company: {
//     type: String,
//     trim: true,
//   },
//   jobTitle: {
//     type: String,
//     trim: true,
//   },
//   email: {
//     type: String,
//     trim: true,
//     lowercase: true,
//     unique: true,
//   },
//   phone: {
//     type: String,
//     trim: true,
//     required: true,
//   },
//   address: {
//     type: String,
//     trim: true,
//   },
//   country: {
//     type: String,
//     trim: true,
//   },
//   customField: [
//     {
//       fieldName: {
//         type: String,
//         trim: true,
//       },
//       fieldValue: {
//         type: String,
//         trim: true,
//       },
//     },
//   ],
//   source: {
//     type: String,
//     trim: true,
//   },
//   notes: {
//     type: String,
//     trim: true,
//   },
//   status: {
//     type: String,
//     default: 'new',
//   },
//   created: {
//     type: Date,
//     default: Date.now,
//   },
// });

// module.exports = mongoose.model('Lead', leadSchema);

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

const leadSchema = new mongoose.Schema({
  removed: {
    type: Boolean,
    default: false,
  },
  enabled: {
    type: Boolean,
    default: true,
  },
  file: {
    type: String,
    required: true,
    trim: true,
  },

  firstName: {
    type: String,
    trim: true,
    required: true,
  },
  lastName: {
    type: String,
    trim: true,
    required: true,
  },
  gender: {
    type: String,
    trim: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
  },
  contactNumber: {
    type: String,
    trim: true,
    required: true,
  },
  parentContact: {
    type: String,
    trim: true,
    required: true,
  },
  qualification: {
    type: String,
    trim: true,
  },
  college: {
    type: String,
    trim: true,
  },
  passYear: {
    type: Date,
    trim: true,
  },
  techOpted: {
    type: String,
    trim: true,
  },
  joinDate: {
    type: Date,
    trim: true,
  },

  leadSource: {
    type: String,
    trim: true,
  },
  leadStatus: {
    type: String,
    default: 'new',
  },
  trainingMode: {
    type: String,
    trim: true,
  },
  street: {
    type: String,
    trim: true,
  },
  city: {
    type: String,
    trim: true,
  },
  state: {
    type: String,
    trim: true,
  },
  zipcode: {
    type: String,
    trim: true,
  },
  country: {
    type: String,
    trim: true,
  },
  description: {
    type: String,
    trim: true,
  },
  created: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Lead', leadSchema);