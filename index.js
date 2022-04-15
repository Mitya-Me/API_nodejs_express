import express from 'express';
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

app.use(err => { 
	console.log(err.message) 
	res.status(500).send(`Oops... ${error.message}`)
})

app.listen(port, (err) => { 
	if (err) console.log('Ooops.. Damned!', err)
	console.log(`[${timeIsNow}] http://localhost:${port}`)
})
