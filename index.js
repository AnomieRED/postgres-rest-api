require('dotenv').config();
const express = require('express');
const userRouter = require('./routes/user.router');
const postRouter = require('./routes/post.router');

const PORT = process.env.SERVER_PORT || 8080;
const app = express();

app.use(express.json());
app.use('/', userRouter);
app.use('/', postRouter);

app.listen(PORT, () => {
	console.log(`Server has been started on port ${PORT}...`);
});
