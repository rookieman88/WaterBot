

const discord = require("discord.js");
const superagent = require("superagent");

module.exports.run = async (bot, input, args) => {
	
	/*
	
  let WatCoin;
	superagent.get("https://api.jsonbin.io/b/5c6e98737bded36fef1b5240/latest").then((res) => {
		WatCoin = res.body;
		
		let sCoins = WatCoin[message.author.id].WatCoin;

if(sCoins < 5000) return message.reply(" `5000원` 이상의 돈을 지니신 분만 플레이할수 있습니다.");

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
       let filter = (reaction, user) => (reaction.emoji.name === '1⃣'' || reaction.emoji.name === '2⃣' || reaction.emoji.name === '3⃣'') && user.id === message.author.id
      
      	      let rpsembed = new discord.RichEmbed()
      .setColor(0x0000ff)
      .addField("가위바위보", '안내면 진다.. 가위 바위... [제한시간 **30초**]')
    message.channel.send(rpsembed).then((th) => {
      th.react('1⃣''
      th.react('2⃣''
      th.react('3⃣''
      th.awaitReactions(filter, {
        time: 30000,
        max: 3
      }).then((collected) => {
        if (!collected) {
          let rpsembed = new discord.RichEmbed()
            .addField("왜 안내냐?", "쫄았네");
          th.edit(rpsembed);
        } else {
          let paper = '1⃣' //2
	  let rock = '2⃣'' //1
	  let sissor =  '3⃣'' //0
	  let realone = :question:
	  let realtwo = :question:
	  let realthree = :question:
	  
	  let mal;
		let bumal;
	  
	          if (collected.array()[0].emoji.name == paper) {
		  
		  
        }
        else if (collected.array()[0].emoji.name == rock) {
	
	
        }
        else if (collected.array()[0].emoji.name == sissor) {
		
		
        }
        else if (collected.array()[0].emoji.name == rock && computer_choice == paper) {
		
		
        }     else if (collected.array()[0].emoji.name == sissor && computer_choice == paper) {
		
		
        }
        else if (collected.array()[0].emoji.name == rock && computer_choice == sissor) {
		
		
        }
        else if (collected.array()[0].emoji.name == paper && computer_choice == rock) {
		
		
        } else {
		
		
	}

let rpsembed = new discord.RichEmbed()
            .setColor(0x0000ff)
            .addField(mal, bumal)


            th.edit(rpsembed)
	}
});


      
      // 아래 if문들은 위에서 부터 계산이 중요한 순서대로 정렬되야 정상적으로 뮤트코인이 지급됩니다
      if (Slot1 == Slot2 && Slot2 == Slot3 && Slot1 == ":seven:") {
          SlotResult = "끼이야야야야아악!! 777!!! 잭팟이다뮤!!!!!! [기존 보유량에 777배]";
          UsersCoin[input.author.id] = {
              UsersCoin: UsersCoin[input.author.id].UsersCoin * 777
          };
      } else if (Slot1 == Slot2 && Slot2 == Slot3 && Slot1 == ":zero:") {
          SlotResult = "엌ㅋ 000 실화얔ㅋ [기존 보유량에 0배, ㅅㄱ]";
          UsersCoin[input.author.id] = {
              UsersCoin: UsersCoin[input.author.id].UsersCoin * 0
          };
      } else if (Slot1 == Slot2 && Slot2 == Slot3) {
          SlotResult = "3슬롯을 맞추는데 성공했다뮤! [+8192 MUC]";
          UsersCoin[input.author.id] = {
              UsersCoin: UsersCoin[input.author.id].UsersCoin + 8192
          };
      } else if (Slot1 == Slot2 || Slot2 == Slot3) {
          SlotResult = "2슬롯을 연속으로 맞추는데 성공했다뮤! [+2048 MUC]";
          UsersCoin[input.author.id] = {
              UsersCoin: UsersCoin[input.author.id].UsersCoin + 2048
          };
      } else if (Slot1 == Slot3) {
          SlotResult = "연속으론 아니지만 2슬롯을 맞추는데 성공했다뮤! [+1024MUC]";
          UsersCoin[input.author.id] = {
              UsersCoin: UsersCoin[input.author.id].UsersCoin + 1024
          };
      } else {
          let Ran4 = Math.floor(Math.random() * (2)) + 0;
          if (Ran4 == 2) {
              SlotResult = "쾅쾅, 경찰이다뮤! **잡았다 요놈** [-4444 MUC(벌금)]";
              UsersCoin[input.author.id] = {
                  UsersCoin: UsersCoin[input.author.id].UsersCoin - 4444
              };
          } else {
              SlotResult = "히익, 운이 없네뮤... 국세청에서 세금을 들고갔다뮤.. [-100 MUC(세금)]";
              UsersCoin[input.author.id] = {
                  UsersCoin: UsersCoin[input.author.id].UsersCoin - 100
              };
          }
      }
      
      superagent.put("https://api.jsonbin.io/b/5c62c948ad5128320af85de0").send(UsersCoin).catch((err) => console.log(err));
        let dobakEmb = new API.RichEmbed()
        .setTitle("▶ :one: :two: :three:")
        .setAuthor("슬롯머신:")
        .setColor("##FF0000")
        .addField(`▶ :one: :two: :three:`, )
        .setFooter(SlotResult);
        th.edit(dobakEmb);
        
	
	});
});

*/
    };

module.exports.help = {
  name: "슬롯머신"
};
