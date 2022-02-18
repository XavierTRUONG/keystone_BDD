const router = require("express-promise-router")();

const { insertUser, insertImage, updateImageById, updateUserById, deleteImageById, deleteUserById, getAllUsers} = require("../controllers");

// Users ------------------------------------------------------------------------------------------------------------------------------------------

router.route('/users')
    .post(insertUser)
    .get(getAllUsers);

router.route('/users/:id')
    .put(updateUserById)
    .delete(deleteUserById);

// Images ------------------------------------------------------------------------------------------------------------------------------------------


router.route('/images')
    .post(insertImage);

router.route('/images/:id')
    .put(updateImageById)
    .delete(deleteImageById);

module.exports = router;