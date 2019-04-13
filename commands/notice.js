const Discord = require("discord.js");
const client = new Discord.Client();

 module.exports.run = async (bot, message, args) => {
 
 let reason = message.content.replace(`~공지`, "")

 if (message.author.id === "417571990820618250") {
bot.guilds.forEach((guild) => { //for each guild the bot is in
         let defaultChannel = "";
         guild.channels.forEach((channel) => {
               if(channel.type == "text" && defaultChannel == "") {
               if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
                   defaultChannel = channel;
               }
               }
         })
	
	defaultChannel.send(`${reason}`)

message.channel(`
  공지 발신 성공!
  내용 : "${reason}"
  `)
} else {return message.channel.send("권한이 없습니다") }
    
		
	};
	
module.exports.help = {
	name: "공지",
}
