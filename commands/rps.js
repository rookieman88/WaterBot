const Discord = module.require("discord.js");

function rand(low, high) {
    return Math.random() * (high + 1 - low) + low | 0;
}

module.exports.run = async (bot, message, args) =>{

  if (args[0]) {
        // get user choice && user choice
        let computer_choice = rand(0,2);
        let user_choice = args[0] == "바위" ? 1 : args[0] == "보" ? 2 : 0;

        // if their choices are same its a draw :D
        if (computer_choice == user_choice) {
          message.reply("무승부!");
        }
        else if (computer_choice < user_choice || computer_choice == 0 && user_choice == 2) {
          message.reply("님 졌음 ㅅㄱ");
        } else {
          message.reply("님이 이겼음");
        }
      }

      if (!args[0]) {
        message.reply("사용법 : ~가위바위보 (낼거)");
      }
    }

module.exports.help = {
  name: "가위바위보"
}
