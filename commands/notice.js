const Discord = require("discord.js");
const client = new Discord.Client();

 module.exports.run = async (bot, message, args) => {
 
 let reason = message.content.replace(`~공지`, "")

 if (message.author.id === "417571990820618250") {
   try {
     this.client.guilds.map((guild) => {
       let found = 0
       guild.channels.map((c) => {
         if (found === 0) {
           if (c.type === "text") {
             if (c.permissionsFor(this.client.user).has("VIEW_CHANNEL") === true) {
               if (c.permissionsFor(this.client.user).has("SEND_MESSAGES") === true) {
                 guild.channels.find(`name`,`공지`).send(`${reason}`);
                 found = 1;
               }
             }
           }
   }
 
     });

   });
 } catch (err) {
     console.log("공지 발신에 실패한 서버가 있습니다.");
   }
       
   message.channel.send(`
공지 발신이 완료되었습니다
공지 내용은 ${reason} 입니다.
`)
 } else {
   message.reply("권한이 없습니다.");
}
    
		
	};
	
module.exports.help = {
	name: "공지",
}
