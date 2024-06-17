import express from 'express';
import teacherSignup from '../controllers/verification.js';
const route = express.Router();

route.post('/signup', teacherSignup);
route.get('/login', (req, res) => {
  res.send('Hello World');
});

export default route;