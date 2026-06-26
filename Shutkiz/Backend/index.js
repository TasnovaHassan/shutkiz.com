//const express = require('express');
//const cors = require('cors'); // Good practice for connecting to React later
//const app = express();

// Import database connection (assumes database.js handles this)
//require('./database'); 

// Middleware
//app.use(express.json());
//app.use(cors());

// 1. IMPORT ALL YOUR ROUTES
//const authRoutes = require('./routes/authRoutes');
//const productRoutes = require('./routes/productRoutes');
//const categoryRoutes = require('./routes/categoryRoutes');
//const orderRoutes = require('./routes/orderRoutes');
//const reviewRoutes = require('./routes/reviewRoutes');
//const userRoutes = require('./routes/userRoutes');

// 2. MOUNT ALL YOUR ROUTES TO API PATHS
//app.use('/api/auth', authRoutes);
//app.use('/api/products', productRoutes);
//app.use('/api/categories', categoryRoutes);
//app.use('/api/orders', orderRoutes);
//app.use('/api/reviews', reviewRoutes);
//app.use('/api/users', userRoutes);

// Root test route
//app.get('/', (req, res) => {
  //  res.send('Backend API is running smoothly...');
//});

// Port configuration
//const PORT = process.env.PORT || 5000;
//app.listen(PORT, () => {
 //   console.log(`Server is running on port ${PORT}`);
//});