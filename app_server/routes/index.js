var express = require('express');
var router = express.Router();
const ctrlMain = require('../controllers/main');

/* GET homepage. */
router.get('/', ctrlMain.index);                    2
module.exports = router;
