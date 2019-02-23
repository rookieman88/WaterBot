
const Discord = require("discord.js");
const fs = require("fs");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

       let WatCoin;
	superagent.get("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240/latest").then((res) => {
		WatCoin = res.body;

    let yongdong;

  if(!WatCoin[message.author.id]){
    WatCoin[message.author.id] = {
      WatCoin: 0
    };
  }
    
		let ranNum = Math.floor(Math.random() * (5)) + 0;
		
    if (ranNum === 0) {
      message.reply(`:one: (1) 이 나왔다! (+ 0 Coins)`);
     yongdong: 0
}
  else if (ranNum === 1) {
    message.reply(`:two: (2) 가 나왔다! (+ 10 Coins)`);
    yongdong: 10
  } 
    else if (ranNum === 2) {
      message.reply(`:three: (3) 이 나왔다! (+20 Coins)`);
      yongdong: 20
    }
    else if (ranNum === 3) {
      message.reply(`:four: (4) 가 나왔다! (+30 Coins)`);
      yongdong: 30
    }
        else if (ranNum === 4) {
      message.reply(`:five: (5) 가 나왔다! (+40 Coins)`);
      yongdong: 40
        }
        else if (ranNum === 5) {
      message.reply(`:six: (6) 이 나왔다! (+50 Coins)`);
      yongdong: 50
  }



  WatCoin[message.author.id] = {
    WatCoin: WatCoin[message.author.id].WatCoin + (yongdong)
  };



 superagent.put("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240").send(WatCoin).catch((err) => console.log(err));
});
}

module.exports.help = {
  name: "주사위"
}
