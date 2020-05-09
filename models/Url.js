const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const urlSchema = new Schema(
    {
        urlCode: {
            type: String
        },
        originalUrl: {
            type: String,
            required: true
        },
        shortUrl: {
            type: String
        },
        user: {
            type: Schema.Types.ObjectId,
            ref: "user"
        }
    }, { timestamps: true }
);

var Url = mongoose.model('url', urlSchema);

module.exports = Url;