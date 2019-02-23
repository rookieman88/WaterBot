const Discord = require('discord.js');

exports.run = (bot, message, args) => {
	
	bot.addToDatabase(message.author.id);
	
	let userData = bot.storage[message.author.id];	// user's data			
	let currentDate = new Date()
	let resetDate = new Date(userData.reset)
	
	if (resetDate < currentDate) {	// checks if cooldown is over.
		
       let WatCoin;
	superagent.get("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240/latest").then((res) => {
		WatCoin = res.body;
                let YongDong = 100;
	
	if(!WatCoin[message.author.id]) WatCoin[message.author.id] = {
	 WatCoin: 0
 };


	WatCoin[message.author.id] = {
			WatCoin: WatCoin[message.author.id].WatCoin + (YongDong)
	};

        superagent.put("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240").send(WatCoin).catch((err) => console.log(err));
	});
		let resetDate = bot.addDays(currentDate, 1);
		userData.reset = resetDate;
		
	// Before cooldown
	} else {
		let timeLeft = new Date(resetDate - currentDate);
    message.channel.send(` **${timeLeft.getHours() }** 시간 **${timeLeft.getMinutes() }** 분 후에 다시 시도하시죠`)
	}
};

module.exports.help = {
  name: "출첵"
}
