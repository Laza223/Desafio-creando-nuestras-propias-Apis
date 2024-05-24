const express = require('express');
const router = express.Router();
const genresApiController = require('../../controllers/api/genres.controller.api');

router.get('/', genresApiController.list);
router.get('/:id', genresApiController.detail);


module.exports = router;