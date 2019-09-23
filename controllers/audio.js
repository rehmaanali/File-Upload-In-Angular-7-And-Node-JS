const express = require('express');
const router = express.Router();
const audio = require('../models/audio/uploadAudio'); // Methods to upload file
/*  @Upload Files Route  */
router.post('/uploadAudioByFile', (req, res) => {
	audio.byFile(req, res, (err, data) => {
		// @err : Boolean , @data : response Data or message
		if (err) {
			res.status(data.statusCode).json(data); // send erroe response with status and err message
		} else {
			res.status(data.statusCode).json(data); // send success response with status and data
		}
	});
});
module.exports = router;
