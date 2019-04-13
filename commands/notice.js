const Discord = require("discord.js");
const client = new Discord.Client();

 module.exports.run = async (bot, message, args) => {
 
 let reason = message.content.replace(`~공지`, "")

 if (message.author.id === "417571990820618250") {

	 /*
	    bot.guilds.forEach((guild) => { //for each guild the bot is in
         let noticeChannel = "";
         guild.channels.forEach((channel) => {
               if(channel.type == "text" && noticeChannel == "") {
               if(channel.permissionsFor(guild.me).has("SEND_MESSAGES")) {
                   noticeChannel = channel;
               }
               }
         })
   }) 
	 
	 
*/
	 message.channel.send("공지")
	 
} else { message.channel.send("권한이 없습니다") }
    
		
	};
	
module.exports.help = {
	name: "공지",
}
