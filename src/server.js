import express from 'express';
import mongoose from 'mongoose';
import userRoutes from './api/user';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});