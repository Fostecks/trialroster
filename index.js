const fs = require("fs");
const Discord = require("discord.js");

const {TOKEN, PREFIX} = require('./config.json') 

const bot = new Discord.Client();
bot.commands = new Discord.Collection();

const applicants = [];

const commandFiles = fs.readdirSync('./commands').filter(file => file.endsWith('.js'));

for (const file of commandFiles) {
	const command = require(`./commands/${file}`);
	bot.commands.set(command.name, command);
}

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


/**************
 * ON MESSAGE *
 *************/
bot.on('message', message => {
	if(message.author.bot) return;

	//if message is command
	if(message.contenet.startsWith(PREFIX)) {
		const args = message.content.slice(PREFIX.length).split(/ +/);
    	const command = args.shift().toLowerCase();

		if (!bot.commands.has(command)) return;

		try {
			bot.commands.get(command).execute(message, args);
		} catch (error) {
			console.error(error);
			message.reply('there was an error trying to execute that command!');
		}
	}

	else if (message.channel.type === "dm") {
		
	}
});
