const Discord = require("discord.js");
const fs = require("fs");
let Coin = JSON.parse(fs.readFileSync("./saves/coins.json", "utf8"));

module.exports.run = async (bot, message, args) => {


  let YongDong = 100;

  message.channel.send("용돈 100원이 지급되었습니다! 잔액을 확인하려면 ~지갑 을 입력하세요");
	
	if(!Coin[message.author.id]) Coin[message.author.id] = {
	 Coin: 0
 };

	Coin[message.author.id] = {
			Coin: Coin[message.author.id].Coin + (YongDong)
	};


  fs.writeFile("./saves/coins.json", JSON.stringify(Coin), (err) => {
    if(err) cosole.log(err)
  });


module.exports.help = {
  name: "돈내놔"
}
