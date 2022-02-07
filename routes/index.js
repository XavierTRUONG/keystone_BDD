const router = require("express-promise-router")();

const { insertUser, insertImage, updateImageById, updateUserById, deleteImage, deleteUser, getAllUsers } = require("../controllers");


router.route('/todos')
    .post(insertUser)
    .post(insertImage)
    .delete(deleteImage)
    .delete(deleteUser)
    .get(getAllUsers);


router.route('/todos/:id')
    .put(updateImageById)
    .put(updateUserById);


module.exports = router;