import express from 'express';
import registerRoutes from './routes';

const app = express();

app.use(express.json());
app.use('/template', registerRoutes());

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

export default app;