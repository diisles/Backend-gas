var express = require('express');
var router = express.Router();

//Reqire controllers.



// root path:
router.route('/')
.get(pagesController.home);
