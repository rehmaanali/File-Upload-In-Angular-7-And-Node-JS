const express = require('express');
const router = express.Router();
router.use('/audio', require('./audio'));
module.exports = router;
