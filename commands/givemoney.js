const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let coins = require("./saves/coins.json");

module.exports.run = async (bot, message, args) => {

//coins

if(!coins[message.author.id]){
	coins[message.author.id] = {
		coins: 0
	};
}

let coinAmt = Math.floor(Math.random() * 100) + 1;
let baseAmt = Math.floor(Math.random() * 100) + 1;

if(coinAmt === baseAmt){
	coins[message.author.id].coins + coinAmt
};
fs.writeFile("./saves/coins.js", JSON.stringify(coins), (err) => {
	if (err) console.log (err)
});
    
 let msgembed = new Discord.RichEmbed
 .setAuthor(message.author.username)
 .setColor("#0000FF")
 .addField("용돈 100원이 지급되었습니다!", "잔액을 확인하려면 "~지갑" 을 입력하세요!");
    
 message.channel.send(msgembed)
    
    
}

  
};

module.exports.help = {
  name: "돈내놔"
}
