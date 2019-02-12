const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let coins = JSON.parse(fs.readFileSync("./saves/coins.json", "utf8"));

module.exports.run = async (bot, message, args) => {


  let user = message.author.id
  let usercoin = coins[user.id].warns;
  
  if(!coins[user.id]) coins[user.id] = {
    coins: 0
  };
  


  message.reply(`<@${user.id}>님은 ${usercoin} 만큼의 돈을 가지고있다!`);

}

module.exports.help = {
  name: "지갑"
}
