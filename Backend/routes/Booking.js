const express = require("express");
const router = express.Router();

const { addbooking, myBooking } = require("../controllers/Booking");

router.post("/addbooking", addbooking);

// READ teacher
router.get("/myBooking", myBooking);

module.exports = router;
