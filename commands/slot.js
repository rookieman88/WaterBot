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
      let Ran1 = Math.floor(Math.random() * (3)) + 0; // 첫번째 슬롯 값 추출
      let Ran2 = Math.floor(Math.random() * (3)) + 0; // 두번째 슬롯 값 추출
      let Ran3 = Math.floor(Math.random() * (3)) + 0; // 세번째 슬롯 값 추출
     
    if (Ran1 = 1) {
          Slot1 = ":one:";
      } else if (Ran1 = 2) {
          Slot1 = ":two:";
      } else if (Ran1 = 3) {
          Slot1 = ":three:";
      }
  
      if (Ran2 = 1) {
          Slot2 = ":one:";
      } else if (Ran2 = 2) {
          Slot2 = ":two:";
      } else if (Ran2 = 3) {
          Slot2 = ":three:";
      }
      
      if (Ran3 = 1) {
          Slot3 = ":one:";
      } else if (Ran3 = 2) {
          Slot3 = ":two:";
      } else if (Ran3 = 3) {
          Slot3 = ":three:";
      }
		
       if (Slot1 == Slot2 && Slot2 == Slot3) {
          SlotResult = "?!?! 3슬롯을 연속으로 맟추는데 성공했다! [+1300 코인]";
          WatCoin[message.author.id] = {
              WatCoin: WatCoin[message.author.id].WatCoin + 1300
          };
      } else if (Slot1 == Slot2 || Slot2 == Slot3) {
          SlotResult = "2슬롯을 연속으로 맟췄다! [+1000 코인]";
          WatCoin[message.author.id] = {
              WatCoin: WatCoin[message.author.id].WatCoin + 1000
          };
      } else if (Slot1 == Slot3) {
          SlotResult = "연속으론 아니지만 2슬롯을 맞추는데 성공했다! [+800 코인]";
          WatCoin[message.author.id] = {
              WatCoin: WatCoin[message.author.id].WatCoin + 800
          };
      } else {
              SlotResult = "쀍 [-1000 코인]";
              WatCoin[message.author.id] = {
                  WatCoin: WatCoin[message.author.id].WatCoin - 1000
              };
          }
      
      
      superagent.put("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240").send(WatCoin).catch((err) => console.log(err));
        let dobakEmb = new discord.RichEmbed()
        .setTitle("슬롯머신!")
        .setAuthor(message.author.username)
        .setColor("#FF0000")
        .setDescription(`${Slot1} ${Slot2} ${Slot3}`)
        .setFooter(SlotResult);
        message.channel.send(dobakEmb);
        
	});
    };

module.exports.help = {
  name: "슬롯머신"
};
