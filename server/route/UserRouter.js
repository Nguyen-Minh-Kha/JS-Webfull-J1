let express = require("express");

const router = express.Router();
let controllerUser = require("../controller/UserController");

router.post("/signup", controllerUser.signup);
router.post("/login", controllerUser.login);
router.get("/auth", controllerUser.auth, (req, res) => {
  res.json({ message: "authorized" });
});

module.exports = router;
