const Discord = require("discord.js");
const bot = new Discord.Client();

 module.exports.run = async (bot, message, args) => {
 
		



		
 let owner = "417571990820618250"
 let havea = "417123204469882890"
 

 
 if (message.author.id === owner || message.author.id === havea) {

let servercount = bot.guilds.size
 
	 	          message.channel.send(`
                      
워터봇은 ${servercount} 개의 서버에 있습니다!
`
);
 }
		
	};
	
module.exports.help = {
	name: "서버",
}
