const express = require('express')
const app = express()
require('dotenv').config()
const routes = require('./routes')
const swaggerUi = require('swagger-ui-express');
swaggerDocument = require('./swagger.json');

const dbConnect = require('./dbConnect')

app.use(
  '/mini-project3',
  swaggerUi.serve,
  swaggerUi.setup(swaggerDocument)
);

app.use(express.json())
app.use('/product', routes.productRoutes)
app.use('/user', routes.userRoutes)
app.use('/cart', routes.cartRoutes)


const PORT = process.env.PORT || 8091

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`)
})
