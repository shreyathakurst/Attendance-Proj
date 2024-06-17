import Teacher from '../models/teacher.model.js';
import { z } from 'zod';

const signupBody = z.object({
  username: z.string(),
  email: z.string().email(),
  password: z.string(),
});

const teacherSignup = async (req, res) => {
  try {
    const { username, email, password } = req.body;

    // Validate input using Zod
    const parseResult = signupBody.safeParse(req.body);
    if (!parseResult.success) {
      return res.status(400).json({
        message: "Invalid input",
        errors: parseResult.error.errors,
      });
    }

    // Create a new teacher instance
    const newTeacher = new Teacher({
      username,
      email,
      password,
    });

    // Save the teacher to the database
    await newTeacher.save();

    res.status(201).json({
      message: 'Teacher created successfully',
      teacher: newTeacher,
    });
  } catch (error) {
    console.error('Error in teacherSignup:', error);
    res.status(500).json({
      message: 'Internal server error',
      error: error.message,
    });
  }
};

export default teacherSignup;
