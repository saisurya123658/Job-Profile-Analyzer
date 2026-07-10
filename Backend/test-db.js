const mongoose = require("mongoose");

async function test() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017");
    console.log("✅ Connected successfully");
    process.exit(0);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

test();