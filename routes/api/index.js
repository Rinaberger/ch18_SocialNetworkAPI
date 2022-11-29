const router = require('express').Router();
const userRoutes = require('./user-routes');
const thoughtRoutes = require('./thought-routes');


// add routes to User/Thought controllers
router.use('/users', userRoutes);
router.use('/thoughts', thoughtRoutes);

module.exports = router;