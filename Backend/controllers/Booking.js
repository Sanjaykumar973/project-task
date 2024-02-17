const yogaBooking = require("../modals/Booking");
const addbooking = (req, res) => {
  const { name, email, address, date, time } = req.body;

  yogaBooking
    .create({ name, email, address, date, time })
    .then((t) => res.json({ success: true, message: "Booking Success" }))
    .catch((err) => res.json({ success: false, message: err.message }));
};

const myBooking = (req, res) => {
  yogaBooking
    .find({})
    .then((Booking) => {
      return res.json({ success: true, yogaBooking: Booking });
    })
    .catch((err) => res.json({ success: false, message: err.message }));
};

module.exports = { addbooking, myBooking };
