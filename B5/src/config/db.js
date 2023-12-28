const mongoose = require("mongoose");

async function connect() {
  try {
    await mongoose.connect(
      "mongodb+srv://hoanduong1810:hoanduong1810@cluster0.qeuhri9.mongodb.net/project_news",
      {}
    );
    console.log("Connect successfully");
  } catch (error) {
    console.log("Connect fail");
  }
}

module.exports = { connect };
