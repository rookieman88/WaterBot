const Discord = require("discord.js");
const bot = new Discord.Client();

 module.exports.run = async (bot, message, args) => {
 
		



 const owners = [405018851399565323, 550876882246303774, 467625748631519244, 417123204469882890, 351303291033878538, 572051155954302976, 461495816142716928, 523282229397422081, 417571990820618250]

 
if (owners.includes(message.author.id)) {
let pref = "~답변"
 let human = args[0]
  let User = bot.users.get(`${human}`)
  let yeyey = pref + human
 let reason = message.content.replace(`~답변 ${human}`, "")
 
 let embed = new Discord.RichEmbed()
 .addField(`답변옴`, `${reason}`)
 
User.send(embed)

 
	 	          message.channel.send(`
                      
답변이 완료되었습니다
답변 내용은 [ ${reason} ] 입니다.
`
);
 }
		
	};
	
module.exports.help = {
	name: "답변",
}
