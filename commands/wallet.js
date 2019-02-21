const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

	superagent.get("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240/latest")
	.then((res) => {
		let WatCoin = res.body;
    
      let Ucoin = WatCoin[message.author.id].WatCoin;
  
    
  message.channel.send(`<@${message.author.id}>님은 ${WatCoin[message.author.id].WatCoin} 만큼의 돈을 가지고있다!`);

    
  });
}

module.exports.help = {
  name: "지갑"
}

