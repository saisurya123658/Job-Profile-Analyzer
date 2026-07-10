// const mongoose = require("mongoose")



// async function connectToDB() {

//     try {
//         await mongoose.connect(process.env.MONGO_URI)

//         console.log("Connected to Database")
//     }
//     catch (err) {
//         console.log(err)
//     }
// }

// module.exports = connectToDB
const mongoose = require("mongoose");

async function connectToDB() {
    try {
        console.log("========== DATABASE DEBUG ==========");
        console.log("MONGO_URI:", process.env.MONGO_URI);
        console.log("NODE_ENV:", process.env.NODE_ENV);

        await mongoose.connect(process.env.MONGO_URI);

        console.log("✅ Connected to Database");
    } catch (err) {
        console.error("Database Error:");
        console.error(err);
    }
}

module.exports = connectToDB;