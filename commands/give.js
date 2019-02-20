const Discord = require("discord.js");
const fs = require("fs");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

       let WatCoin;
	superagent.get("https://api.jsonbin.io/b/5c62c948ad5128320af85de0/latest").then((res) => {
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

    message.channel.send(` ${pUser}한테 ${args[1]} 만큼 기부한거 맞죠? 환불 안됨 `);

  WatCoin[message.author.id] = {
    WatCoin: sCoins - parseInt(args[1])
  };

  WatCoin[pUser.id] = {
    WatCoin: pCoins + parseInt(args[1])
  };



 superagent.put("https://api.jsonbin.io/b/5c62c948ad5128320af85de0").send(WatCoin).catch((err) => console.log(err));
});
}

module.exports.help = {
  name: "기부"
}
