const express = require('express');
const morgan = require('morgan');
const dotenv = require('dotenv');
const productRoutes = require('./Routing/productsRouting.js');
const errorMiddleware = require('./middleware/errorMiddleware');

dotenv.config();

const app = express();
app.use(morgan('dev'));
app.use(express.json());
app.use('/api', productRoutes);
app.use(express.json());
app.use(productRoutes);
app.use(errorMiddleware);


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor corriendo en el puerto ${PORT}`);
});






