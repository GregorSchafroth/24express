// middleware/logger.js

import colors from 'colors'

const logger = (req, res, next) => {
  const methodColors = {
    GET: 'green',
    POST: 'yellow',
    PUT: 'blue',
    DELETE: 'red',
  }

  const color = methodColors[req.method] || 'white'

  console.log(
    colors[color](
      `${req.method} ${req.protocol}://${req.get('host')}${req.originalUrl}`
    )
  )
  next()
}

export default logger
