const yogaTeachers = require("../modals/Yoga");

const addyoga = (req, res) => {
  const { name, experience, description, location, profile } = req.body;

  yogaTeachers
    .create({ name, experience, location, description, profile })
    .then((t) => res.json({ success: true, message: "Add Teacher" }))
    .catch((err) => res.json({ success: false, message: err.message }));
};

const readyoga = (req, res) => {
  yogaTeachers
    .find({})
    .then((yoga) => {
      return res.json({ success: true, yogaTeachers: yoga });
    })
    .catch((err) => res.json({ success: false, message: err.message }));
};

module.exports = { addyoga, readyoga };
