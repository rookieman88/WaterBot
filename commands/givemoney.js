const Discord = require("discord.js");
const fs = require("fs");
const superagent = require("superagent");


module.exports.run = async (bot, message, args) => {

	


	superagent.get("https://api.jsonbin.io/b/5c62c948ad5128320af85de0/latest").then((res) => {
		let WatCoin = res.body;
                let YongDong = 100;
	
	if(!WatCoin[message.author.id]) WatCoin[message.author.id] = {
	 WatCoin: 0
 };

	WatCoin[message.author.id] = {
			WatCoin: WatCoin[message.author.id].WatCoin + (YongDong)
	};


 superagent.PUT("https://api.jsonbin.io/b/5c62c948ad5128320af85de0").send(WatCoin).catch((err) => console.log(err));

	});
}

module.exports.help = {
  name: "돈내놔"
}
