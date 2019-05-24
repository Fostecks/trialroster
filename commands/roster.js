const Discord = require("discord.js");


module.exports = {
	name: 'roster',
	description: 'Create new roster',
	execute(message) {
		message.channel.send("Starting roster...");
	},
};