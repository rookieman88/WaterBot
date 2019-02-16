const Discord = require("discord.js");
const fs = require("fs");


module.exports.run = async (bot, message, args) => {

	
  let YongDong = 100;

 
     let Coin = JSON.parse(fs.readFileSync("./saves/coins.json", "utf8"));
	
	if(!Coin[message.author.id]) Coin[message.author.id] = {
	 Coin: 0
 };

	Coin[message.author.id] = {
			Coin: Coin[message.author.id].Coin + (YongDong)
	};


  fs.writeFile("./saves/coins.json", JSON.stringify(Coin), (err) => {
    if(err) cosole.log(err)
  });

}

module.exports.help = {
  name: "돈내놔"
}
