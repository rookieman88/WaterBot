const Discord = require("discord.js");
const fs = require("fs");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

if (args[0] === '인사') {


	superagent.get("https://api.myjson.com/bins/z6qiw").then((res) => {
		let welcomechannel = res.body;

  if(!welcomechannel[message.guild.id]){
        welcomechannel[message.guild.id] = {
      welcomechannel: 0
    };
  }
let msguild = welcomechannel[message.guild.id].welcomechannel		
if (msguild === 0) {
		

let chaid = message.channel.id

  welcomechannel[message.guild.id] = {
    welcomechannel: chaid
  };
  
  message.channel.send('인사 채널이 설정되었습니다.')


} else if (msguild > 0) {
	let chaid = message.channel.id
 welcomechannel[message.guild.id] = {
    welcomechannel: 0
  };
	
	message.channel.send("인사 채널이 초기화되었습니다")
	
}


 superagent.put("https://api.myjson.com/bins/z6qiw").send(welcomechannel).catch((err) => console.log(err));

  
  


});


} else if (args[0] === '경고') { 
	
		superagent.get("https://api.myjson.com/bins/15bi20").then((res) => {
		let welcomechannel = res.body;

  if(!welcomechannel[message.guild.id]){
        welcomechannel[message.guild.id] = {
      welcomechannel: 0
    };
  }
let msguild = welcomechannel[message.guild.id].welcomechannel		
if (msguild === 0) {
		

let chaid = message.channel.id

  welcomechannel[message.guild.id] = {
    welcomechannel: chaid
  };
  
  message.channel.send('경고 채널이 설정되었습니다.')


} else if (msguild > 0) {
	let chaid = message.channel.id
 welcomechannel[message.guild.id] = {
    welcomechannel: 0
  };
	
	message.channel.send("인사 채널이 초기화되었습니다")
	
}


 superagent.put("https://api.myjson.com/bins/15bi20").send(welcomechannel).catch((err) => console.log(err));

  
  


});

	
	
} else if (args[0] === '공지') {
	
			superagent.get("https://api.myjson.com/bins/sztu0").then((res) => {
		let welcomechannel = res.body;

  if(!welcomechannel[message.guild.id]){
        welcomechannel[message.guild.id] = {
      welcomechannel: 0
    };
  }
let msguild = welcomechannel[message.guild.id].welcomechannel		
if (msguild === 0) {
		

let chaid = message.channel.id

  welcomechannel[message.guild.id] = {
    welcomechannel: chaid
  };
  
  message.channel.send('공지 채널이 설정되었습니다.')


} else if (msguild > 0) {
	let chaid = message.channel.id
 welcomechannel[message.guild.id] = {
    welcomechannel: 0
  };
	
	message.channel.send("인사 채널이 초기화되었습니다")
	
}


 superagent.put("https://api.myjson.com/bins/sztu0").send(welcomechannel).catch((err) => console.log(err));

  
  


});
	
	
}
}

module.exports.help = {
  name: "채널설정"
}
