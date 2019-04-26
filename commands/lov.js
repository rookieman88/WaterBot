const Discord = require("discord.js");
const bot = new Discord.Client();

 module.exports.run = async (bot, message, args) => {
 
		
 
let rannum2 =  Math.floor(Math.random() * (2)) + 0; 
let rannum;
let onep = args[0]
let twop = args[1]
if (rannum2 === 1) {
	
 rannum =  Math.floor(Math.random() * (50)) + 0;
	
}else {
	
rannum =  Math.floor(Math.random() * (50)) + 50;
}
let embed = new Discord.RichEmbed()
.setTitle("재미로 보는 궁합!")
.addField(`${onep} 와 ${twop} 의 궁합은?`, `${rannum}% 입니다!`)
message.channel.send(embed);
		
	};

	
module.exports.help = {
	name: "궁합",
}
