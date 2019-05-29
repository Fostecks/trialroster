const indexExports = require("../index.js");
const Trial = require("../trial.js");

module.exports = {
	name: 'username',
	description: 'Update the username of the current roster work in progress',
	execute(message, args) {
        let bot = indexExports.bot;
        let trial = bot.trialMap[message.author.id];
        let rosterMessage = trial.rosterMessage;

        rosterMessage.edit(trial.withUsername(args).toRichText()[1]);
	},
};