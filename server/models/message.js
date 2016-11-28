var mongoose = require('mongoose');


var MessageSchema = new mongoose.Schema({
	text: String,
	isMedia: Boolean,
	isYoutube: Boolean,
	mediaSource: String,
	youtubeKey: String
});

module.exports = mongoose.model("Message", MessageSchema);
