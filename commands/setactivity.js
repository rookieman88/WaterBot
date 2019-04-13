const Discord = require("discord.js");
const client = new Discord.Client

module.exports.run = async (bot, message, args) => {

  let human;
  
  if (args[0] == "플레이") {
    human = 1
  } else if (args[0] == "시청") {
    human = 2
  } else { 
    human = 1
  }
  
     let reason = message.content.replace(`~답변 ${human}`, "")

   
  if (human === 1) {
  
  client.user.setActivity(`${reason}`, {type: "PLAYING"});
  
  } else if (human === 2) {
    
  client.user.setActivity(`${reason}`, {type: "WATCHING"});
    
    }
                                        
  



}

module.exports.help = {
  name: "봇게임"
}
