const Discord = require('discord.js')

const bot = new Discord.Client();

 module.exports.run = async (bot, message, args) => {
 

let ready = new Discord.RichEmbed()
.setTitle('타자대결')
.addField(`규칙`, `1. 1분을 기다립니다. \n 2. 3명 이상이 참가하면 시작합니다. \n 3. 렌덤으로 제시자가 주어집니다. \n 4. 제시자는 원하는 문장을 입력합니다. \n 5. 참가자들은 그 문장을 따라 적습니다. \n 6. 먼저 입력한 사람이 우승!`)   
.setFooter('참가자를 기다리는중 (이모지를 눌러 참여하세요)')   
 message.channel.send(ready).then((msg) => {
   

  
   msg.react('🎉')
   
         const filter = (reaction, user) => reaction.emoji.name === '🎉' && user.id !== bot.user.id
      msg.awaitReactions(filter, {
        maxUsers: 3
}).then((collected) => {
        let p1 = collected.array()[0].users.array()[1].id
        let p2 = collected.array()[0].users.array()[2].id
        let p3 = collected.array()[0].users.array()[3].id
        
	 let saram = ranNum = Math.floor(Math.random() * (3)) + 0;
	 
	 let itgo;
	      let itgo2;
	      
	 if(saram === 1) {
	 itgo = collected.array()[0].users.array()[1].username
		 itgo2 = p1
	 }else if (saram === 2){
	 itgo = collected.array()[0].users.array()[2].username
		 itgo2 = p2
	 } else if (saram === 3){
	 itgo = collected.array()[0].users.array()[3].username
		 itgo2 = p3
	 } else {
	 itgo = collected.array()[0].users.array()[3].username
		 itgo2 = p3
	 }
	      

        
        let start = new Discord.RichEmbed()
        .setTitle('시작')
        .addField(` ${itgo} 님! 문장을 입력해 주세요`, `빨리빨리!`)
	
	msg.edit(start)
	
	 const filter = (m) => m.author.id === itgo2;
	 
	     message.channel.awaitMessages(filter, {
		max: 1,
		time: 60000
    }).then((collected) => {
let titleinput = collected.first().content;

        let gogo = new Discord.RichEmbed()
        .setTitle('짜잔!')
        .addField(`빨리 " ${titleinput} " 을(를) 입력하세요!`, `빨리빨리!`)
	
	msg.edit(gogo)

		     
 const fillter = (message) => message.content === titleinput

	     message.channel.awaitMessages(fillter, {
		max: 1
    }).then((collected) => {
    
    let nvm = new Discord.RichEmbed()
    .setTitle('게임끝!')
    .addField(`우승한사람`, collected.first().author.username)
    
    msg.edit(nvm)




});
	
	
      });
   
      });
 });
         
   
  
		
	};
	
module.exports.help = {
	name: "타자대결",
}
