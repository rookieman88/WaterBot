
const Discord = require("discord.js");
const fs = require("fs");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {

       let WatCoin;
	superagent.get("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240/latest").then((res) => {
		WatCoin = res.body;

    if(!WatCoin[message.author.id]){
    return message.reply("돈이 없는데?")
  }
  let sCoins = WatCoin[message.author.id].WatCoin;

  
  let yongdong;
    
		let ranNum = Math.floor(Math.random() * (3)) + 0;

		
		let win;
		let mal;
		
    if (ranNum === 0) {
      mal = (`결과는..?
2배로 돌려받습니다! ㅊㅊ`);
      win = 1
}
  else if (ranNum === 1) {
    mal = (`결과는..?
실패하셨습니다...
모든 돈 하늘로 승천!`);
    win = 2
  }
    else if (ranNum === 2) {
    mal = (`결과는..? 
4배로 돌려받습니다! ㅊㅊ`);
     win = 3
    };


if (win === 1) {
  WatCoin[message.author.id] = {
    WatCoin: WatCoin[message.author.id].WatCoin + (sCoins / 1)
  }
  message.channel.send(mal);
  } else if (win === 2) {
    WatCoin[message.author.id] = {
    WatCoin: WatCoin[message.author.id].WatCoin - (sCoins / 1)
  }
  message.channel.send(mal);
  } else if (win === 3) {
  WatCoin[message.author.id] = {
    WatCoin: WatCoin[message.author.id].WatCoin + (sCoins * 3)
  }
  message.channel.send(mal);
  };
		




 superagent.put("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240").send(WatCoin).catch((err) => console.log(err));
});
}


module.exports.help = {
  name: "올인"
}
