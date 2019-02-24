
const Discord = require("discord.js");
const fs = require("fs");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
let um = args.join(" ").slice(22);

       let WatCoin;
	superagent.get("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240/latest").then((res) => {
		WatCoin = res.body;

    if(!WatCoin[message.author.id]){
    return message.reply("돈이 없는데?")
  }
  let sCoins = WatCoin[message.author.id].WatCoin;
  if(sCoin < args[0]) return message.reply("그만큼 돈은 있음?");
  
  let yongdong;
    
		let ranNum = Math.floor(Math.random() * (2)) + 0;
	
if (ranNum === 0) {
  yongdong = (um * 4)
  } else if (ranNum === 1) {
 yongdong = (um / 1)
  } else if (ranNum === 2) {
yongdong = (um * 2)
  }
		
    if (ranNum === 0) {
      let mal = (`3분의 1의 확률로 4배로 돌려받습니다! ㅊㅊ`);
      let win = 1
}
  else if (ranNum === 1) {
    let mal = (`도박 실패... `);
    let win = 2
  }
    else if (ranNum === 2) {
     let mal = (`3분의 1의 확률로 2배로 돌려받습니다! ㅊㅊ`);
     let win = 3
    }


if (win === 1) {
  WatCoin[message.author.id] = {
    WatCoin: WatCoin[message.author.id].WatCoin + (yongdong / 1)
  };
  } else if (win === 2) {
    WatCoin[message.author.id] = {
    WatCoin: WatCoin[message.author.id].WatCoin - (yongdong / 1)
  };
  } else if (win === 3) {
  WatCoin[message.author.id] = {
    WatCoin: WatCoin[message.author.id].WatCoin + (yongdong / 1)
  };
  };



 superagent.put("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240").send(WatCoin).catch((err) => console.log(err));
});
      if (!args[0]) {
        message.channel.send("사용법 : ~도박 (걸 돈)");
      }
}

module.exports.help = {
  name: "도박"
}
