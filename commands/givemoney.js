const Discord = require("discord.js");
const fs = require("fs");
let coins = JSON.parse(fs.readFileSync("./saves/coins.json", "utf8"));

module.exports.run = async (bot, message, args) => {
  
  
let user = message.author.id

if(!coins[user.id]) coins[user.id] = {
    coins: 0
  };
 coins[user.id].coins + 1000;

  fs.writeFile("./saves/coins.json", JSON.stringify(coins), (err) => {
    if (err) console.log(err)
  });
  
  message.channel.send(`<@${message.author.id}>용돈 1000원이 지급되었다!`);
  
};

module.exports.help = {
  name: "돈내놔"
}
