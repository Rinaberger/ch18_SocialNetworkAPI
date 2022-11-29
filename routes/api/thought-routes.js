const router = require('express').Router();

//add get, post, put, etc. api for thoughts
const {
    getAllThoughts,
    getThoughtById,
    createThought,
    updateThought,
    deleteThought,
    addReaction,
    removeReaction
} = require('../../controllers/thoughtController');

//routes by controller function
router.route('/').get(getAllThoughts).post(createThought);
router.route('/:id').get(getThoughtById).put(updateThought).delete(deleteThought);
router.route('/:thoughtID/reactions').post(addReaction);
router.route('/:thoughtID/reactions/reactionID').delete(removeReaction);

module.exports = router;