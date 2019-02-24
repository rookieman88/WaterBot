const discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
	superagent.get("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240/latest").then((res) => {
		let WatCoin = res.body;

  let coinAmt = Math.floor(Math.random() * (1)) + 0; 
  let coinAmtMent; 
  
  if (coinAmt === 0) {
      coinAmtMent = 30;
  } else if (coinAmt === 1) {
      coinAmtMent = 10;
  };

  if (coinAmt === 0) {
    message.channel.send(`동전을 던집니다! 결과는?
    앞이네요! +30 Coins`);
      WatCoin[message.author.id] = {
          WatCoin: WatCoin[input.author.id].WatCoin + (coinAmtMent / 1)
      }
  } else if (coinAmt === 1) {
          message.channel.send(`동전을 던집니다! 결과는?
    뒤네요.. -10 Coins`);
      WatCoin[message.author.id] = {
          WatCoin: WatCoin[message.author.id].WatCoin - (coinAmtMent / 1)
      };
  superagent.put("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240").send(WatCoin).catch((err) => console.log(err));

});
}

module.exports.help = {
  name: "동전던지기",
}
