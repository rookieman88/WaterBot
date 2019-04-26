const Discord = require("discord.js");
const bot = new Discord.Client();

 module.exports.run = async (bot, message, args) => {
 
		



		
 let owner = "417571990820618250"
 

 
 if (message.author.id === owner) {
let pref = "~공지 "

bot.guilds.forEach(guild => {
    guild.channels.find(t => t.name == '공지').send(pref);
})
 } else {
	 message.channel.send('당신은 봇 관리자로 등록되어있지 않습니다.')
	 
	};
	
module.exports.help = {
	name: "공지",
}
