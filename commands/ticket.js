const Discord = require("discord.js");
const client = new Discord.Client();
const superagent = require("superagent");

 module.exports.run = async (bot, message, args) => {
 
       let WatCoin;
	superagent.get("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240/latest").then((res) => {
		WatCoin = res.body;

  if(!WatCoin[message.author.id]){
        WatCoin[message.author.id] = {
      WatCoin: 30
    };
  }

  let sCoins = WatCoin[message.author.id].WatCoin;
		
		let ddong = 1000

  if(sCoins < ddong) return message.reply("복권을 구매하려면 `1000` 원 이상의 돈이 필요합니다.");
		
		
let Ran1 = Math.floor(Math.random() * (10)) + 0; 
let Ran2 = Math.floor(Math.random() * (20)) + 0; 
let Ran3 = Math.floor(Math.random() * (20)) + 0; 
let Ran4 = Math.floor(Math.random() * (20)) + 0; 
let Ran5 = Math.floor(Math.random() * (20)) + 0; 
let Ran6 = Math.floor(Math.random() * (20)) + 0; 
let Ran7 = Math.floor(Math.random() * (20)) + 0; 
let Ran10 = Math.floor(Math.random() * (20)) + 0; 
let Ran20 = Math.floor(Math.random() * (20)) + 0; 
let Ran30 = Math.floor(Math.random() * (20)) + 0; 
let Ran40 = Math.floor(Math.random() * (20)) + 0; 
let Ran50 = Math.floor(Math.random() * (20)) + 0; 
let Ran60 = Math.floor(Math.random() * (20)) + 0; 
let Ran70 = Math.floor(Math.random() * (20)) + 0; 

	
let itgo = 0
		
if (Ran1 === Ran10) {
	itgo = parseIng(0) + parseInt(1)
}
if (Ran2 === Ran20) {
	itgo = parseIng(0) + parseInt(1)
}
if (Ran3 === Ran30) {
	itgo = parseIng(0) + parseInt(1)
}
if (Ran4 === Ran40) {
	itgo = parseIng(0) + parseInt(1)
}
if (Ran5 === Ran50) {
	itgo = parseIng(0) + parseInt(1)
}
if (Ran6 === Ran60) {
	itgo = parseIng(0) + parseInt(1)
}
if (Ran7 === Ran70) {
	itgo = parseIng(0) + parseInt(1)
}
		
		let mal;
		
if (itgo === 1) {
	mal = `1개 당첨! [ +500 코인 (손익 : -500코인) ]`
	let good = 500
	  WatCoin[message.author.id] = {
    WatCoin: sCoins + parseInt(good)
  };
} else if (itgo === 2) {
	mal = `2개 당첨! [ +1000 코인 (손익 : 0코인) ]`
	let good = 1000
	  WatCoin[message.author.id] = {
    WatCoin: sCoins + parseInt(good)
  };
} else if (itgo === 3) {
		mal = `3개 당첨! [ +1500 코인 (손익 : +500코인) ]`
	let good = 1500
	  WatCoin[message.author.id] = {
    WatCoin: sCoins + parseInt(good)
  };
} else if (itgo === 4) {
		mal = `4개 당첨! [ +2000 코인 (손익 : +1000코인) ]`
	let good = 2000
	  WatCoin[message.author.id] = {
    WatCoin: sCoins + parseInt(good)
  };
} else if (itgo === 5) {
		mal = `5개 당첨! [ +2500 코인 (손익 : +1500코인) ]`
	let good = 2500
	  WatCoin[message.author.id] = {
    WatCoin: sCoins + parseInt(good)
  };
} else if (itgo === 6) {
		mal = `6개 당첨! [ +3000 코인 (손익 : +2000코인) ]`
	let good = 3000
	  WatCoin[message.author.id] = {
    WatCoin: sCoins + parseInt(good)
  };
} else if (itgo === 7) {
		mal = `7개 당첨! [ +7000 코인 (손익 : +6000코인) ]`
	let good = 7000
	  WatCoin[message.author.id] = {
    WatCoin: sCoins + parseInt(good)
  };
} else {
	mal = `0개 당첨! [ 손익 : -1000코인 ]`
}

	

 let giveembed = new Discord.RichEmbed()
 .setColor("#6699ff")
 .setAuthor(`${message.author.username}`)
 .setTitle(`복권`)
 .addField(`내번호`, ` ${Ran1} ${Ran2} ${Ran3} ${Ran4} ${Ran5} ${Ran6} ${Ran7} `)
 .addField(`당첨 번호`, ` ${Ran10} ${Ran20} ${Ran30} ${Ran40} ${Ran50} ${Ran60} ${Ran70} `)
 .setDescription(mal)
 
		
		
    message.channel.send(giveembed);
		
		

  WatCoin[message.author.id] = {
    WatCoin: sCoins - parseInt(ddong)
  };





 superagent.put("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240").send(WatCoin).catch((err) => console.log(err));
});

    
		
	};
	
module.exports.help = {
	name: "복권",
}
