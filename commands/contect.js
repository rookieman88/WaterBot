const Discord = require("discord.js");
const bot = new Discord.Client();

 module.exports.run = async (bot, message, args) => {
 
		


		let reason = args.join(" ").slice(22);
		
 let owner = bot.users.get("417571990820618250")
 
 let txt = new discord.RichEmbed()
 .setAuthor(`문의가 왔다! ${message.author}`)
 .addField("문의 내용", reason)
 
 owner.send(txt)
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
