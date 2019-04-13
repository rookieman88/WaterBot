const Discord = require("discord.js");
const client = new Discord.Client();

 module.exports.run = async (bot, message, args) => {
 
 let reason = message.content.replace(`~공지`, "")

 if (message.author.id === "417571990820618250") {
        var guildList = client.guilds.array();
        try {
            guildList.forEach(guild => guild.channels.find(`name`,`공지`).send(`${reason}`));
		console.log("공지 발송 성공!")
        } catch (err) {
            console.log("공지 발신이 안된 서버도 있다!");
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
