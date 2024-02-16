const express = require("express");
const router = express.Router();

const { addyoga, readyoga } = require("../controllers/yoga");

router.post("/addyoga", addyoga);

// READ teacher
router.get("/getyoga", readyoga);

module.exports = router;
