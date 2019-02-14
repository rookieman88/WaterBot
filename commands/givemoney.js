const Discord = require("discord.js");
const fs = require("fs");
let coins = JSON.parse(fs.readFileSync("./saves/coins.json", "utf8"));

module.exports.run = async (bot, message, args) => {
	

  let sCoins = coins[message.author.id].coins;
  let yongdong = 100;

	
  coins[message.author.id] = {
    coins: sCoins + parseInt(yongdong)
  };


  fs.writeFile("./saves/coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });

 let msgembed = new Discord.RichEmbed()
 .setColor("#0000FF")
 .addField("용돈 100원이 지급되었습니다!", "잔액을 확인하려면 ~지갑 을 입력하세요!");
    
 message.channel.send(msgembed)

}

module.exports.help = {
  name: "돈내놔"
}
