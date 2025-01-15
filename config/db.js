const mongoose = require('mongoose');

const connectToDB = async () => {
  try {
    await mongoose.connect(process.env.DB_URI)
  } catch (err) {
    process.exit(1)
  }
}

module.exports = connectToDB