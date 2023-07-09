//import express, { Request, Response } from 'express';
import express, { Express, Request, Response, NextFunction } from 'express';


//const app = express();
const app: Express = express();
const port = 3000;
const connectDB = require("../config/db.js")

//connect to db
connectDB()

// Middleware
app.use(express.json());
// Routes
app.get('/', (req: Request, res: Response) => {
  res.send('Hello, World!');
});

// Start the server
app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
