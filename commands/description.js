const indexExports = require("../index.js");
const Trial = require("../trial.js");

module.exports = {
	name: 'description',
	description: 'Update the description of the current roster work in progress',
	execute(message, args) {
        let bot = indexExports.bot;
        let trial = bot.trialMap[message.author.id];
        let rosterMessage = trial.rosterMessage;

        let description = message.content.split(" ").slice(1);

        rosterMessage.edit(trial.withDescription(description).toRichText()[1]);
	},
};