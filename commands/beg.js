const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

  let Coin = JSON.parse(fs.readFileSync("./saves/coins.json", "utf8"));
  
  if(!Coin[message.author.id]){
    return message.reply("님도 돈이 없는데?")
  }

  let pUser = message.guild.member(message.mentions.users.first()) || message.guild.members.get(args[0]);

  if(!Coin[pUser.id]){
    Coin[pUser.id] = {
      Coin: 0
    };
  }

  let pCoins = Coin[pUser.id].Coin;
  let sCoins = Coin[message.author.id].Coin;

  if(sCoins < args[1]) return message.reply("그만큼 돈은 있음?");

    message.channel.send(` ${pUser}한테 ${args[1]} 만큼 기부한거 맞죠? 환불 안됨 `);
  
  Coin[message.author.id] = {
    Coin: sCoins - parseInt(args[1])
  };

  Coin[pUser.id] = {
    Coin: pCoins + parseInt(args[1])
  };



  fs.writeFile("./saves/coins.json", JSON.stringify(Coin), (err) => {
    if(err) cosole.log(err)
  });


}

module.exports.help = {
  name: "기부"
}
