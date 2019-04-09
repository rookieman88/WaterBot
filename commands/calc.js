const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {

  if(!args[0]) return message.channel.send("사용법 : ~계산 숫자1 (+, -, *, /) 숫자2");
  var input = args[0]
  let sign = args[1]
  var inputyee = args[2]
  
  if (sign == '+') {
    var output = input + inputyee
    
    let calcembed = new Discord.RichEmbed()
    .setTitle("계산기")
    .addField(`${input} + ${inputyee} 의 값은?`, `${output}`)
       message.channel.send(calcembed)
    } else if (sign == '-') {
    let output = input - inputyee
    
    let calcembed = new Discord.RichEmbed()
    .setTitle("계산기")
    .addField(`${input} - ${inputyee} 의 값은?`, `${output}`)
       message.channel.send(calcembed)
    } else if (sign == '*') {
    let output = input * inputyee
    
    let calcembed = new Discord.RichEmbed()
    .setTitle("계산기")
    .addField(`${input} × ${inputyee} 의 값은?`, `${output}`)
       message.channel.send(calcembed)
    } else if (sign == '/') {
    let output = input / inputyee
    
    let calcembed = new Discord.RichEmbed()
    .setTitle("계산기")
    .addField(`${input} ÷ ${inputyee} 의 값은?`, `${output}`)
      message.channel.send(calcembed)
    
    } 
  



}

module.exports.help = {
  name: "계산"
}
