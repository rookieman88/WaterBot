const Discord = require("discord.js");
const fs = require("fs");
const superagent = require("superagent");


module.exports.run = async (bot, message, args) => {
 
	
let cooldown = new Set();
let cdseconds = 8.64e+7;
	

	

       let WatCoin;
	superagent.get("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240/latest").then((res) => {
		WatCoin = res.body;
                let YongDong = 100;
	
	if(!WatCoin[message.author.id]) WatCoin[message.author.id] = {
	 WatCoin: 0
 };
			if(cooldown.has(message.author.id)){
    return message.reply(`쿨다운중입니다.. ~돈내놔를 마지막으로 입력한 시간부터 24시간 뒤에 다시 입력해 주세요`)
  }

	WatCoin[message.author.id] = {
			WatCoin: WatCoin[message.author.id].WatCoin + (YongDong)
	};


 superagent.put("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240").send(WatCoin).catch((err) => console.log(err));
	 
	setTimeout(() => {
    cooldown.delete(message.author.id)
  })
	});
	



}

module.exports.help = {
  name: "출첵"
}
