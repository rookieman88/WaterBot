const Discord = require('discord.js')

const bot = new Discord.Client();

 module.exports.run = async (bot, message, args) => {
 
/*
let ready = new Discord.RichEmbed()
.setTitle('타자대결')
.addField(`규칙`, `1. 1분을 기다립니다. \n 2. 3명 이상이 참가하면 시작합니다. \n 3. 렌덤으로 제시자가 주어집니다. \n 4. 제시자는 원하는 문장을 입력합니다. \n 5. 참가자들은 그 문장을 따라 적습니다. \n 6. 먼저 입력한 사람이 우승! \n 7. 3~6 반복`)   
.setFooter('참가자를 기다리는중')   
 message.channel.send(ready).then((msg) => {
   

  
   msg.react('🎉')
   
         const filter = (reaction, user) => reaction.emoji.name === '🎉' && user.id !== bot.user.id
      msg.awaitReactions(filter, {
        maxUsers: 4
}).then((collected) => {
        let p1 = collected.array()[0].users.array()[1].id
        let p2 = collected.array()[0].users.array()[2].id
        let p3 = collected.array()[0].users.array()[3].id
        let p4 = collected.array()[0].users.array()[4].id
        
        
        let start = new Discord.RichEmbed()
        .setTitle('시작')
        .addField('')
      });
   
   });
         
   
  */
		
	};
	
module.exports.help = {
	name: "타자대결",
}
