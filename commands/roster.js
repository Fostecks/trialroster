const indexExports = require("../index.js");
const Trial = require("../trial.js");

module.exports = {
	name: 'roster',
	description: 'Create new roster',
	async execute(message, args) {
		let newTrial = Trial(message.author);
		let bot = indexExports.bot;

		bot.trialMap[message.author.id] = newTrial;
		let rosterMessages = newTrial.toRichText();
		let pingMessage = await  message.channel.send(rosterMessages[0]);
		let rosterMessage = await message.channel.send(rosterMessages[1]);
		indexExports.bot.trialMap[message.author.id].pingMessage = pingMessage;
		indexExports.bot.trialMap[message.author.id].rosterMessage = rosterMessage;
		
	},
};