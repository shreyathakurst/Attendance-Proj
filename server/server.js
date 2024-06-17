import express from 'express'
import cors from 'cors'
import teacherRouter from './routes/teacherRoute.js'
import mongoose from 'mongoose';
const app = express();
app.use(express.json());
app.use(cors());


mongoose.connect('mongodb+srv://bewithme2407:IFlLcypNB9JMtk7t@mern-blog.iggxm3g.mongodb.net/attendence') // mongoose connection
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
});


const port = process.env.PORT || 3000;


app.use('/api/teacher', teacherRouter)
app.listen(port, () => {
  console.log(`our app is working on the port ${port}`);
})