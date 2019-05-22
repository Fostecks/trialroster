const Commando = require("discord.js-commando");
const {TOKEN, PREFIX} = require('./config.json') 

const bot = new Commando.Client({
    disableEveryone: true,
    unknownCommandResponse: false,
    commandPrefix: PREFIX
});

bot.login(TOKEN);

/*******************************
 *        EVENT HANDLERS       *
 ******************************/

/************
 * ON READY *
 ***********/
bot.on('ready', async () => {
    console.log("bot ready");
});