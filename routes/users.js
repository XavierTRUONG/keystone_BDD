const router = require("express-promise-router")();

const { insertUser } = require("../controllers/users");

router.route("/")
    .post(insertUser);

module.exports = router;