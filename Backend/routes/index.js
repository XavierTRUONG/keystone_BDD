const router = require("express-promise-router")();

const { insertUser, insertImage, updateImageById, updateUserById, deleteImageById, deleteUserById, getAllUsers, upload} = require("../controllers");

// Users ------------------------------------------------------------------------------------------------------------------------------------------

router.route('/users')
    .post(insertUser)
    .get(getAllUsers);

router.route('/users/:id')
    .put(updateUserById)
    .delete(deleteUserById);

// Images ------------------------------------------------------------------------------------------------------------------------------------------

router.route('/images/:id')
    .put(updateImageById)
    .delete(deleteImageById);

// UploadImage ------------------------------------------------------------------------------------------------------------------------------------------

router.route('/uploadImage')
    .post(upload, insertImage);

module.exports = router;