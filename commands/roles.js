const indexExports = require("../index.js");
const Trial = require("../trial.js");

module.exports = {
	name: 'roles',
	description: 'Update the rolse of the current roster work in progress. Example: 1 Main Tank, 1 Off Tank, 2 Healer, 8 DPS',
	execute(message, args) {
        let bot = indexExports.bot;
        let trial = bot.trialMap[message.author.id];
        let rosterMessage = trial.rosterMessage;

        let roles = message.content.split(" ").slice(1).join(" ");

        rosterMessage.edit(trial.withRoles(roles).toRichText()[1]);
	},
};