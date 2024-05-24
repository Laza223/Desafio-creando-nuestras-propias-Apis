const express = require('express');
const router = express.Router();
const moviesApiController = require('../../controllers/api/movies.controller.api');

router.get('/', moviesApiController.list);
router.get('/:id', moviesApiController.detail);
router.post('/', moviesApiController.create);
router.delete('/:id', moviesApiController.delete);



module.exports = router;