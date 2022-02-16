const router = require('express').Router();
const apiRoutes = require('./api');

router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Please try again, this is a wrong route.</h1>")
});

module.exports = router;