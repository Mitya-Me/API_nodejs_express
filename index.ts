import express, { Request, Response, NextFunction } from 'express';
import { userRouter } from './users/users.js';

const port = 3000;
const app = express();
const timeIsNow = new Date().toLocaleString();

app.use((req, res, next) => { 
	console.log(`[${timeIsNow}] ${req.method}: ${req.url}`)
	next();
})

app.get('/hello', (req, res) => {
	res.end()
})

app.use('/users', userRouter);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => { 
	console.log(err.message) 
	res.status(500).send(`Oops... ${err.message}`)
})

app.listen(port, () => { 
	console.log(`[${timeIsNow}] http://localhost:${port}`)
})
