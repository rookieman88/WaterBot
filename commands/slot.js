const discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, message, args) => {
  let WatCoin;
	superagent.get("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240/latest").then((res) => {
		WatCoin = res.body;
    if (!WatCoin[message.author.id]) {
      WatCoin[message.author.id] = {
        WatCoin: 0
      };
    }

      let Slot1; // 첫번째 슬롯 값의 대한 메세지 스트링
      let Slot2; // 두번째 슬롯 값의 대한 메세지 스트링
      let Slot3; // 세번째 슬롯 값의 대한 메세지 스트링
      let SlotMax = 100; // 생성될 슬롯 값의 최대값
      let Ran1 = Math.floor(Math.random() * (SlotMax)) + 0; // 첫번째 슬롯 값 추출
      let Ran2 = Math.floor(Math.random() * (SlotMax)) + 0; // 두번째 슬롯 값 추출
      let Ran3 = Math.floor(Math.random() * (SlotMax)) + 0; // 세번째 슬롯 값 추출
     

      if (Ran1 <= 20) {
          Slot1 = ":zero:";
      } else if (Ran1 <= 40) {
          Slot1 = ":one:";
      } else if (Ran1 <= 50) {
          Slot1 = ":two:";
      } else if (Ran1 <= 70) {
          Slot1 = ":three:";
      } else if (Ran1 <= 80) {
          Slot1 = ":four:";
      } else if (Ran1 <= 95) {
          Slot1 = ":five:";
      } else if (Ran1 <= 99) {
          Slot1 = ":six:";
      } else if (Ran1 == 100) {
          Slot1 = ":seven:";
      }
  
      if (Ran2 <= 10) {
          Slot2 = ":zero:";
      } else if (Ran2 <= 20) {
          Slot2 = ":one:";
      } else if (Ran2 <= 40) {
          Slot2 = ":two:";
      } else if (Ran2 <= 45) {
          Slot2 = ":three:";
      } else if (Ran2 <= 60) {
          Slot2 = ":four:";
      } else if (Ran2 <= 75) {
          Slot2 = ":five:";
      } else if (Ran2 <= 85) {
          Slot2 = ":six:";
      } else if (Ran2 <= 100) {
          Slot2 = ":seven:";
      }
      
      if (Ran3 <= 10) {
          Slot3 = ":zero:";
      } else if (Ran3 <= 20) {
          Slot3 = ":one:";
      } else if (Ran3 <= 30) {
          Slot3 = ":two:";
      } else if (Ran3 <= 40) {
          Slot3 = ":three:";
      } else if (Ran3 <= 50) {
          Slot3 = ":four:";
      } else if (Ran3 <= 60) {
          Slot3 = ":five:";
      } else if (Ran3 <= 70) {
          Slot3 = ":six:";
      } else if (Ran3 <= 100) {
          Slot3 = ":seven:";
      }
      
      if (Slot1 == Slot2 && Slot2 == Slot3 && Slot1 == ":seven:") {
          SlotResult = "우와 짝짝짝 777이 나왔네! 7777코인 드림";
          WatCoin[message.author.id] = {
              WatCoin: WatCoin[message.author.id].WatCoin + 7777
          };
      } else if (Slot1 == Slot2 && Slot2 == Slot3 && Slot1 == ":zero:") {
          SlotResult = "엌ㅋ 0 0 0 ㅋㅋㅋㅋㅋ [+0 코인]";
          WatCoin[message.author.id] = {
              WatCoin: WatCoin[message.author.id].WatCoin + 0
          };
      } else if (Slot1 == Slot2 && Slot2 == Slot3) {
          SlotResult = "?!?! 3슬롯을 연속으로 맟추는데 성공했다! [+3000 코인]";
          WatCoin[message.author.id] = {
              WatCoin: WatCoin[message.author.id].WatCoin + 3000
          };
      } else if (Slot1 == Slot2 || Slot2 == Slot3) {
          SlotResult = "2슬롯을 연속으로 맟췄다! [+2000 코인]";
          WatCoin[message.author.id] = {
              WatCoin: WatCoin[message.author.id].WatCoin + 2000
          };
      } else if (Slot1 == Slot3) {
          SlotResult = "연속으론 아니지만 2슬롯을 맞추는데 성공했다! [+1500 코인]";
          WatCoin[message.author.id] = {
              WatCoin: WatCoin[message.author.id].WatCoin + 1024
          };
      } else {
              SlotResult = "쀍 [-500 코인]";
              WatCoin[message.author.id] = {
                  WatCoin: WatCoin[message.author.id].WatCoin - 100
              };
          }
      }
      
      superagent.put("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240").send(WatCoin).catch((err) => console.log(err));
        let dobakEmb = new discord.RichEmbed()
        .setTitle("슬롯머신!")
        .setAuthor(message.author.username)
        .setColor("#FF0000")
        .setDescription(`▶ ${Slot1} ${Slot2} ${Slot3}`)
        .setFooter(SlotResult);
        message.channel.send(dobakEmb);
        
	});
    };

module.exports.help = {
  name: "슬롯머신"
};
