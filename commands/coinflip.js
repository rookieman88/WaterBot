const discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {


  let coinAmt = Math.floor(Math.random() * (3)) + 0;
  let coinAmtMent; 




  if (coinAmt === 0) {
    message.channel.send(`동전을 던집니다! 결과는?
    앞이네요!`);
      
  } else if (coinAmt === 1) {
          message.channel.send(`동전을 던집니다! 결과는?
    뒤네요..`);
  } else if  (coinAmt === 2) {
	  message.channel.send(`동전을 던집니다! 결과는?
 섯다!`);
  };
		
}

module.exports.help = {
  name: "동전던지기"
}
