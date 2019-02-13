const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let coins = JSON.parse(fs.readFileSync("./saves/coins.json", "utf8"));

module.exports.run = async (bot, message, args) => {

let user = message.author    

if(!coins[user.id]) coins[user.id] = {
    coins: 100
  };
 coins[user.id].coins++100;

  
  message.reply("용돈 100원이 지급되었다!");
  
};

module.exports.help = {
  name: "돈내놔"
}
