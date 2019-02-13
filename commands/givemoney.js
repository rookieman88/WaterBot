const Discord = require("discord.js");
const fs = require("fs");
let coins = JSON.parse(fs.readFileSync("./saves/coins.json", "utf8"));

module.exports.run = async (bot, message, args) => {

if(!coins[message.author.id]) coins[message.author.id] = {
    coins: 100
  };
 coins[message.author.id].coins ++;

  
  message.reply("용돈 100원이 지급되었다!");
  
};

module.exports.help = {
  name: "돈내놔"
}
