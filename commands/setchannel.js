const Discord = require("discord.js");
const fs = require("fs");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

if (args[0] === '인사') {

       let welcomechannel;
	superagent.get("https://api.myjson.com/bins/elh6o").then((res) => {
		welcomechannel = res.body;

  if(!welcomechannel[message.guild.id]){
        welcomechannel[message.guild.id] = {
      welcomechannel: 0
    };
    
  let msguild = welcomechannel[message.author.id].welcomechannel;
let chaid = message.channel.id

  welcomechannel[message.guild.id] = {
    welcomechannel: parseInt(msguild) + parseInt(chaid)
  };
  
  message.channel.send('인사 채널이 설정되었습니다.')





 superagent.put("https://api.myjson.com/bins/elh6o").send(welcomechannel).catch((err) => console.log(err));

  } else {
  

    
  let msguild = welcomechannel[message.author.id].welcomechannel;

  welcomechannel[message.guild.id] = {
    welcomechannel: msguild - msgguild
  };
  
  message.channel.send('인사 채널이 초기화되었습니다.')





 superagent.put("https://api.myjson.com/bins/elh6o").send(welcomechannel).catch((err) => console.log(err));

}
});


}
}

module.exports.help = {
  name: "채널설정"
}
