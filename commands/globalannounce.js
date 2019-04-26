const Discord = require("discord.js");
const bot = new Discord.Client();

 module.exports.run = async (bot, message, args) => {
 
		



		
 let owner = "417571990820618250"
 

 
 if (message.author.id === owner) {


bot.guilds.forEach(guild => {
	 let reason = message.content.replace(`~공지 `, "")
    let ch = guild.channels.find('name', '공지')
    ch.send(reason);
});
 } else {
	 message.channel.send('당신은 봇 관리자로 등록되어있지 않습니다.')
 }
	 
	};
	
module.exports.help = {
	name: "공지",
}
