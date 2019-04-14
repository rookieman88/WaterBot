const Discord = require("discord.js");
const bot = new Discord.Client();

 module.exports.run = async (bot, message, args) => {
 
		
let rannum =  Math.floor(Math.random() * (100)) + 0; 

let onep = args[0]
let twop = args[1]

let embed = new Discord.RichEmbed()
.setTitle("재미로 보는 궁합!")
.addField(`${onep} 와 ${twop} 의 궁합은?`, `${rannum}% 입니다!`)
message.channel.send(embed);
		
	};
	
module.exports.help = {
	name: "궁합",
}
