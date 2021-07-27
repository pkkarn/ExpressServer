const express = require('express');
const dotenv = require('dotenv');

// lOad env file

dotenv.config({ path: './config/config.env' })

const app = express(); // instance of express

const PORT = process.env.PORT || 3000;

app.listen(PORT, console.log(`SERVER is running in ${process.env.NODE_ENV} mode on port ${PORT}`)); //to listen from server at port