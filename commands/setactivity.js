const Discord = require("discord.js");
const client = new Discord.Client

module.exports.run = async (bot, message, args) => {

  
 const owners = process.env.owners

 
if (owners.includes(message.author.id)) {
    
  let act = args[0]
    
  let human;
  
  if (args[0] == "플레이") {
    human = 1
  } else if (args[0] == "시청") {
    human = 2
  } else { 
    human = 1
  }
  
     let reason = message.content.replace(`~봇게임 ${act} `, "")

   
  if (human === 1) {
  
 bot.user.setActivity(`${reason}`, {type: "PLAYING"});
    message.channel.send(`
워터봇이 ${reason} 을 플레이하게 하였습니다. (상태메시지 확인)
`)
  
  } else if (human === 2) {
    
  bot.user.setActivity(`${reason}`, {type: "WATCHING"});
       message.channel.send(`
워터봇이 ${reason} 을 시청하게 하였습니다. (상태메시지 확인)
`)
    
    }
    
  } else {
    message.channel.send("권한이 없습니다!")
    
  }
                                        
  



}

module.exports.help = {
  name: "봇게임"
}
