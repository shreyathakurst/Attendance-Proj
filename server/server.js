import express from 'express'
const app = express();
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`our app is working on the port ${port}`);
})