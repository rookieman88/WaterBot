const Discord = require("discord.js");
const bot = new Discord.Client();

 module.exports.run = async (bot, message, args) => {
 
		



		
 let owner = "417571990820618250"
 let havea = "417123204469882890"
 let chaemoong = '431085681847042048'
 let remac = '361091925266137089'
 let dorydarg = '405018851399565323'
 let jenon = '550876882246303774'
 let jenonp = '467625748631519244'
 

 
 if (message.author.id === owner || message.author.id === havea || message.author.id === chaemoong || message.author.id === remac || message.author.id === dorydarg || message.author.id === jenon || message.author.id === jenonp) {
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
