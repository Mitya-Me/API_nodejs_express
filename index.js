import express from 'express';

const port = 3000;
const app = express();

app.get('/hello', (req, res) => {
	res.send('Hello people')
})

app.listen(port, (err) => { 
	if (err) console.log('Ooops.. Damned!', err)
	console.log(`::: START ::: Success: server started. http://localhost:${port}`)
})

~