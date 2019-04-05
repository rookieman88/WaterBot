
const Discord = require("discord.js");
const fs = require("fs");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {


    
		let ranNum = Math.floor(Math.random() * (5)) + 0;
	


		
    if (ranNum === 0) {
      message.reply(`:one: (1) 이 나왔다!`);
}
  else if (ranNum === 1) {
    message.reply(`:two: (2) 가 나왔다!`);
  }
    else if (ranNum === 2) {
      message.reply(`:three: (3) 이 나왔다!`);
    }
    else if (ranNum === 3) {
      message.reply(`:four: (4) 가 나왔다!`);
    }
        else if (ranNum === 4) {
      message.reply(`:five: (5) 가 나왔다!`);
        }
        else {
      message.reply(`:six: (6) 이 나왔다!`);
  };



}

module.exports.help = {
  name: "주사위"
}
