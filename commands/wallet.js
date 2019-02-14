const Discord = require("discord.js");
const fs = require("fs");
const ms = require("ms");
let coins = require("../saves/coins.json");

module.exports.run = async (bot, message, args) => {

  if(!coins[message.author.id]){
   coins[message.authorid] = {
     coins: 0
   };
    
  }
let usercoin = coins[message.author.id].coins;
  
  message.channel.send(`당신은 ${usercoin} 만큼의 돈을 가지고 있습니다!`);
  
  
}

module.exports.help = {
  name: "지갑"
}
