import mongoose from 'mongoose'

const StudentSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  admin: {
    type: Boolean,
    default: true
  }
})

const student = mongoose.model('student', StudentSchema);

export default student;
