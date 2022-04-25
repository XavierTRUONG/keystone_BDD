const router = require("express-promise-router")();

const { insertNewUser, insertImage, updateImageById, updateUserById, deleteImageById, deleteUserById, getAllUsers, upload, identificationUser} = require("../controllers");

// Users ------------------------------------------------------------------------------------------------------------------------------------------

router.route('/users/')
    .post(insertNewUser)
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

// identification ------------------------------------------------------------------------------------------------------------------------------------------

router.route('/identification')
.post(identificationUser);

module.exports = router;