const yogaTeachers = require("../modals/Yoga");

const addyoga = (req, res) => {
  const { name, experience, description, location } = req.body;

  yogaTeachers
    .create({ name, experience, location, description })
    .then((t) => res.json({ success: true, message: "Add Teacher" }))
    .catch((err) => res.json({ success: false, message: err.message }));
};

const readyoga = (req, res) => {
  yogaTeachers
    .find({ experience, name, location, description })
    .then((yoga) => {
      console.log(yoga);
      return res.json({ success: true, yogaTeachers: yoga });
    })
    .catch((err) => res.json({ success: false, message: err.message }));
};

module.exports = { addyoga, readyoga };
