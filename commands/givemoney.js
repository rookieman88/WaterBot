const Discord = require('discord.js');

exports.run = (bot, message, args) => {
	bot.addToDatabase(message.author.id);
	
	let userData = bot.storage[message.author.id];	// user's data			
	let currentDate = new Date()
	let resetDate = new Date(userData.reset)
	
	if (resetDate < currentDate) {	// checks if cooldown is over.
		dailyAmount = 100
		bot.addMoney(dailyAmount, userData);
		let dailyEmbed = new Discord.MessageEmbed()
			.setDescription(` \`${dailyAmount}\`코인이 지급되었습니다!`)
      .setColor("#f58390")
      .setFooter(message.author.tag, message.author.displayAvatarURL())
		message.channel.send({ embed: dailyEmbed })
		let resetDate = bot.addDays(currentDate, 1);
		userData.reset = resetDate;
		bot.saveFile("s");
		
	// Before cooldown
	} else {
		let timeLeft = new Date(resetDate - currentDate);
    message.channel.send(`<@${message.author.id}>, **${timeLeft.getHours() }** 시간 **${timeLeft.getMinutes() }** 분 기다리삼`)
	}
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  cat: "economy"
};

module.exports.help = {
  name: "돈내놔"
};
