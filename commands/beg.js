const Discord = require("discord.js");
const fs = require("fs");
let coins = require("../saves/coins.json");

module.exports.run = async (bot, message, args) => {

  if(!coins[message.author.id]){
    return message.reply("님도 돈이 없는데?")
  }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if(!coins[pUser.id]){
    coins[pUser.id] = {
      coins: 0
    };
  }

  let pCoins = coins[pUser.id].coins;
  let sCoins = coins[message.author.id].coins;

  if(sCoins < args[0]) return message.reply("그만큼 돈은 있음?");

  coins[message.author.id] = {
    coins: sCoins - parseInt(args[1])
  };

  coins[pUser.id] = {
    coins: pCoins + parseInt(args[1])
  };

  message.channel.send(` ${pUser}한테 ${args[1]} 만큼 기부한거 맞죠? 환불 안됨 `);

  fs.writeFile("./saves/coins.json", JSON.stringify(coins), (err) => {
    if(err) cosole.log(err)
  });


}

module.exports.help = {
  name: "기부"
}
