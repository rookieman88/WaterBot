console.log("리부터 실행됨");




const Discord = require('discord.js');
const bot = new Discord.Client();({disableEveryone: true});
bot.commands = new Discord.Collection();
const API = require("discord.js");
const superagent = require("superagent");
const fs = require("fs");

bot.on("message", async message => {
	
if(message.content.startsWith(`워터봇 재부팅`)){
 if(message.author.id === "417571990820618250") {

    let props = require(`./core.js`);
	bot.commands.set('core', props);


  let commandfile = bot.commands.get('core')

  commandfile.run;
	 
	 message.channel.send("성공적으로 재부팅이 완료되었습니다!")
 } else { return message.channel.send("당신은 오아시스가 아닙니다.")

	
}
}
});
