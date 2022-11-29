const router = require('express').router();

//add get, post, put, etc. api for users
const {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
    addFriend,
    deleteFriend
} = require('../../controllers/userController');

//routes by controller function
router.route('/').get(getAllUsers).post(createUser);
router.route('/:id').get(getUserById).put(updateUser).delete(deleteUser);
router.route('/:id/friends/:friendsID').post(addFriend).delete(deleteFriend);

module.exports = router;