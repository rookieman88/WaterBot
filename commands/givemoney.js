const Discord = require("discord.js");
const fs = require("fs");
const superagent = require("superagent");


module.exports.run = async (bot, message, args) => {

	

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
}

module.exports.help = {
  name: "돈내놔"
}
