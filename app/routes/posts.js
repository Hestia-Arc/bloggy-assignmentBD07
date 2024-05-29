const express = require('express');
const router = express.Router();
const postsController = require('../controllers/postsController');
const validateRequest = require('../middlewares/createPostValidator');

router.get('/', postsController.index);

router.get('/:post', postsController.show)

router.post('/', validateRequest, postsController.store);

// to update a post
router.put('/:post', validateRequest, postsController.update)


// to delete a post
router.delete('/:post', postsController.remove)


module.exports = router;
