const discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

	message.channel.send(` [${Math.round(bot.ping)}ms] `);
  
};

module.exports.help = {
	name: "핑"
};
