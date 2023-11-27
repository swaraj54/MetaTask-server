import mongoose, { Schema } from "mongoose";

const log = new Schema({
    userId: String,
    timestamp: { type: Date, default: Date.now },
    status: String,
    errorMessage: String,
    request: Object,
    response: Object,
})

const Log = mongoose.model("Log", log);

export default Log;