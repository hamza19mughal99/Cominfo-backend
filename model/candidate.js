import mongoose from "mongoose";

const IframeSchema = new mongoose.Schema({
    urlLink: {
        type: String,
        required: true,
    } 
})

const iframe = mongoose.model('iframe', IframeSchema);

export default iframe;