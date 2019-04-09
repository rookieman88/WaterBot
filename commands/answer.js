const Discord = require("discord.js");
const bot = new Discord.Client();

 module.exports.run = async (bot, message, args) => {
 
		



		
 let owner = "417571990820618250"
 

 
 if (message.author.id === owner) {
 let human = args[0]
  let User = bot.users.get(`${human}`)
 let reason = args[1]
 
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
