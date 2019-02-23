const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
const superagent = require("superagent");


module.exports.run = async (bot, message, args) => {
 
	
const cooldown = new Set();

    if (cooldown.has(message.author.id)) {
            message.channel.send("쿨다운중입니다.. 내일 다시 시도하세요..");
    } else {

        cooldown.add(message.author.id);
    };
	

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
	 
	        setTimeout(() => {
          cooldown.delete(message.author.id);
        }, 8.64e+7);

	});

}

module.exports.help = {
  name: "출첵"
}
