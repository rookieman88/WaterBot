const Discord = require("discord.js");
const fs = require("fs");


module.exports.run = async (bot, message, args) => {

	
  let YongDong = 100;

	superagent.get("https://api.jsonbin.io/b/5c62c948ad5128320af85de0/latest").then((res) => {
		let WatCoin = res.body;

	
	if(!WatCoin[message.author.id]) WatCoin[message.author.id] = {
	 WatCoin: 0
 };

	WatCoin[message.author.id] = {
			WatCoin: WatCoin[message.author.id].WatCoin + (YongDong)
	};


 superagent.put("https://api.jsonbin.io/b/5c62c948ad5128320af85de0").send(WatCoin).catch((err) => console.log(err));

}

module.exports.help = {
  name: "돈내놔"
}
