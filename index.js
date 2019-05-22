const Commando = require("discord.js-commando");
const {TOKEN, BOT_CLIENT_ID, DISCORD_GUILD_NAME, BOT_CHANNEL_NAME, TEXT_CHANNEL_BLACKLIST, PREFIX} = require('./config.json') 

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