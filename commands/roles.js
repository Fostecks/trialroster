const indexExports = require("../index.js");
const Trial = require("../trial.js");

module.exports = {
	name: 'roles',
	description: 'Update the description of the current roster work in progress',
	execute(message, args) {
        let bot = indexExports.bot;
        let trial = bot.trialMap[message.author.id];
        let rosterMessage = trial.rosterMessage;

        let roles = message.content.split(" ").shift();

        rosterMessage.edit(trial.withDescription(args).toRichText()[1]);
	},
};