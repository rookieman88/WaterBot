

const discord = require("discord.js");
const superagent = require("superagent");
const delay = ms => new Promise(res => setTimeout(res, ms));

module.exports.run = async (bot, message, args) => {



  let WatCoin;
	superagent.get("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240/latest").then((res) => {
		WatCoin = res.body;

		let sCoins = WatCoin[message.author.id].WatCoin;
		
		
		 const Moning = args.join(" ");

if(sCoins < 5000) return message.reply(" `5000원` 이상의 돈을 지니신 분만 플레이할 수 있습니다. ");
if(Moning < 1000) return message.reply(" `1000윈` 이상의 돈을 걸어야 플레이 할 수 있습니다. ");

      let Slot1; // 첫번째 슬롯 값의 대한 메세지 스트링
      let Slot2; // 두번째 슬롯 값의 대한 메세지 스트링
      let Slot3; // 세번째 슬롯 값의 대한 메세지 스트링
      let SlotMax = 100; // 생성될 슬롯 값의 최대값
      let Ran1 = Math.floor(Math.random() * (100)) + 0; // 첫번째 슬롯 값 추출
      let Ran2 = Math.floor(Math.random() * (100)) + 0; // 두번째 슬롯 값 추출
      let Ran3 = Math.floor(Math.random() * (100)) + 0; // 세번째 슬롯 값 추출
      let SlotResult;

      // 첫번째 슬롯 값의 대한 메세지 스트링
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

      // 두번째 슬롯 값의 대한 메세지 스트링
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

      // 세번째 슬롯 값의 대한 메세지 스트링
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


      	      let rpsembed = new discord.RichEmbed()
        .setTitle("▶ :one: :two: :three:")
        .setAuthor("슬롯머신:")
        .setColor("##FF0000")
        .addField(`▶ :question: :question: :question: `, `???`)
    message.channel.send(rpsembed).then((th) => {

      setTimeout(function() {



         let rpsembed = new discord.RichEmbed()
        .setTitle("▶ :one: :two: :three:")
        .setAuthor("슬롯머신:")
        .setColor("##FF0000")
        .addField(`▶ ${Slot1} :question: :question: `, `???`)

	th.edit(rpsembed)

}, 3000);

      setTimeout(function() {

         let rpsembed = new discord.RichEmbed()
        .setTitle("▶ :one: :two: :three:")
        .setAuthor("슬롯머신:")
        .setColor("##FF0000")
        .addField(`▶ ${Slot1} ${Slot2} :question: `, `???`)

	th.edit(rpsembed)

}, 3000);


     setTimeout(function() {

         let rpsembed = new discord.RichEmbed()
        .setTitle("▶ :one: :two: :three:")
        .setAuthor("슬롯머신:")
        .setColor("##FF0000")
        .addField(`▶ ${Slot1} ${Slot2} ${Slot3} `, `???`)

	th.edit(rpsembed)

}, 3000);


   setTimeout(function() {

let Yeang;


 WatCoin[message.author.id] = {
     WatCoin: WatCoin[message.author.id].WatCoin - Moning
 };



      // 아래 if문들은 위에서 부터 계산이 중요한 순서대로 정렬되야 정상적으로 뮤트코인이 지급됩니다
      if (Slot1 == Slot2 && Slot2 == Slot3 && Slot1 == ":seven:") {
          SlotResult = "끼이야야야야아악!! 777!!! 잭팟이다!!!!!! [+13777 코인]";
          let Leang = 13777 - Moning
          Yeang = `보상  [ 13777원 ] - 게임비 [ ${Moning}원 ] 손익 : [ ${Leang}원 ]`
          WatCoin[message.author.id] = {
              WatCoin: WatCoin[message.author.id].WatCoin + 13777
          };
      } else if (Slot1 == Slot2 && Slot2 == Slot3 && Slot1 == ":zero:") {
          SlotResult = "엌ㅋ 000 실화얔ㅋ [+0 코인, ㅅㄱ]";
          let Leang = 0 - Moning
          Yeang = `보상  [ 0원 ] - 게임비 [ ${Moning}원 ] 손익 : [ ${Leang}원 ]`
      } else if (Slot1 == Slot2 && Slot2 == Slot3) {
          SlotResult = "3슬롯을 맞추는데 성공했다! [+8192 코인]";
          let Leang = 8192 - Moning
          Yeang = `보상  [ 8192원 ] - 게임비 [ ${Moning}원 ] 손익 : [ ${Leang}원 ]`
          WatCoin[message.author.id] = {
              WatCoin: WatCoin[message.author.id].WatCoin + 8192
          };
      } else if (Slot1 == Slot2 || Slot2 == Slot3) {
          SlotResult = "2슬롯을 연속으로 맞추는데 성공했다! [+2048 코인]";
          let Leang = 2048 - Moning
          Yeang = `보상  [ 2048원 ] - 게임비 [ ${Moning}원 ] 손익 : [ ${Leang}원 ]`
          WatCoin[message.author.id] = {
              WatCoin: WatCoin[message.author.id].WatCoin + 2048
          };
      } else if (Slot1 == Slot3) {
          SlotResult = "연속으론 아니지만 2슬롯을 맞추는데 성공했다! [+1024 코인]";
          let Leang = 1024 - Moning
          Yeang = `보상  [ 1024원 ] - 게임비 [ ${Moning}원 ] 손익 : [ ${Leang}원 ]`
          WatCoin[message.author.id] = {
              WatCoin: WatCoin[message.author.id].WatCoin + 1024
          };
      } else {
              SlotResult = "운이 없네... [-2000 코인]";
              let Leang = 0 - Moning
              Yeang = `보상  [ 0원 ] - 게임비 [ ${Moning}원 ] 손익 : [ ${Leang}원 ]`
              WatCoin[message.author.id] = {
                  WatCoin: WatCoin[message.author.id].WatCoin - 2000

          }
      }

      superagent.put("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240").send(WatCoin).catch((err) => console.log(err));



	         let rpsembed = new discord.RichEmbed()
        .setTitle("▶ :one: :two: :three:")
        .setAuthor("슬롯머신:")
        .setColor("##FF0000")
        .addField(`▶ ${Slot1} ${Slot2} ${Slot3} `, SlotResult)
        .setFooter(Yeang)

	th.edit(rpsembed)

}, 3000);


});
});


    };

module.exports.help = {
  name: "슬롯머신"
};
