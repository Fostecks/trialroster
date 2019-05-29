const indexExports = require("../index.js");
const Trial = require("../trial.js");

module.exports = {
	name: 'groupstoping',
	description: 'Update the discord groups to ping for the current roster work in progress',
	execute(message, args) {
        let bot = indexExports.bot;
        let trial = bot.trialMap[message.author.id];
        let pingMessage = trial.pingMessage;

        pingMessage.edit(trial.withGroupsToPing(args).toRichText()[0]);
	},
};