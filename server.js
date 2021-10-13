const express = require('express');
const dotenv = require('dotenv');
const posts = require('./posts/index');
const logger = require('./middleware/logger')
const morgan = require('morgan');
const connectDB = require('./config/db');
const colors = require('colors');
const errorHandler = require('./middleware/error')
// lOad env file
dotenv.config({ path: './config/config.env' })

//connect to database
connectDB();

const app = express(); // instance of express

app.use(express.json()); // Body parser middleware: To give access to req.body to our controllers

// Example of creating Middleware
const example_middleware = (req, res, next) => {
    req.hello = 'CodeChit World'; // Every declared routes after this middleware will have access of this req
    console.log('middleware ran'.blue.bold);
    next(); // So, that it could move to next middleware
}

// Thirdparty Middleware
if(process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

// Thirdparty Middleware
if(process.env.NODE_ENV === 'production') {
    app.use(logger);
}

app.use(example_middleware);

app.use('/api/v1/codechit/posts', posts);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;

const server = app.listen(PORT, console.log(`SERVER is running in ${process.env.NODE_ENV} mode on port ${PORT}`.yellow.bold)); //to listen from server at port

// Handle unhandled promise rejections
process.on('unhandledRejection', (err, promise) => {
    console.log(`Error: ${err.message}`.bgRed.bold);
    // Close server & exit process
    server.close(() => process.exit(1));
});