const Discord = require("discord.js");
const bot = new Discord.Client();

 module.exports.run = async (bot, message, args) => {
 
		


 let reason = args.join(' ')
		
 let owner = bot.users.get("417571990820618250")
 let tf = bot.channels.get("564749434282311680");
 
 
 let embed = new Discord.RichEmbed()
 .setTitle(`문의옴`)
 .addField(`${message.author.id}`, `${reason}`)
 
owner.send(embed)
tf.send(embed)

 
	 	          message.channel.send(`
                      
문의가 완료되었습니다
문의사항은 [ ${reason} ] 입니다.
잘못보냈을경우 "취소합니다" 라고 다시 보내주세요.
`
);
		
	};
	
module.exports.help = {
	name: "문의",
}
