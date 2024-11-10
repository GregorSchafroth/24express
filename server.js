//server.js
import express from 'express'
import posts from './routes/posts.js'
import logger from './middleware/logger.js'
import errorHandler from './middleware/error.js'
import notFound from './middleware/notFound.js'

const port = process.env.PORT || 8000
const app = express()

// logger middleware
app.use(logger)

// body parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

// routes
app.use('/api/posts', posts)

// not found
app.use(notFound)

// error handler
app.use(errorHandler)

app.listen(port, () => console.log(`server is running on port ${port}`))
