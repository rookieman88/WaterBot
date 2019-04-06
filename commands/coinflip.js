const discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {


  let coinAmt = Math.floor(Math.random() * (3)) + 0;
	
  let mal;
  let bumal;




	
	
  if (coinAmt === 0) {
    mal = `동전을 던집니다! 결과는?`
    bumal = `앞이네요!`
      
  } else if (coinAmt === 1) {
          mal = `동전을 던집니다! 결과는?`
    bumal = `뒤네요..`
  } else if  (coinAmt === 2) {
	  mal = `동전을 던집니다! 결과는?`
 bumal = `섯다!`
  };
	
	let malembed = new discord.RichEmbed()
	 .setColor(0x0000ff)
	.setAuthor(message.author.username)
	.addField(mal, bumal)
		
}

module.exports.help = {
  name: "동전던지기"
}
