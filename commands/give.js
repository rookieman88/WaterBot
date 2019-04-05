const Discord = require("discord.js");
const fs = require("fs");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

       let WatCoin;
	superagent.get("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240/latest").then((res) => {
		WatCoin = res.body;

  if(!WatCoin[message.author.id]){
    return message.reply("님도 돈이 없는데?")
  }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if(!WatCoin[pUser.id]){
    WatCoin[pUser.id] = {
      WatCoin: 0
    };
  }

  let pCoins = WatCoin[pUser.id].WatCoin;
  let sCoins = WatCoin[message.author.id].WatCoin;

  if(sCoins < args[1]) return message.reply("그만큼 돈은 있음?");

 let giveembed = new Discord.RichEmbed()
 .setColor("#6699ff")
 .setTitle("기부")
 .setAuthor(`${message.author.username}이 <@${pUser.id}>에게 기부했습니다`)
 .addField(`기부한 돈`, `${args[1]}`)
 
		
		
    message.channel.send(giveembed);

  WatCoin[message.author.id] = {
    WatCoin: sCoins - parseInt(args[1])
  };

  WatCoin[pUser.id] = {
    WatCoin: pCoins + parseInt(args[1])
  };



 superagent.put("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240").send(WatCoin).catch((err) => console.log(err));
});
}

module.exports.help = {
  name: "기부"
}
