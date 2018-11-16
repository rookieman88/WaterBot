const Discord = require("discord.js");
const fs = require("fs");

module.exports.run = async (bot, message, args) => {

 if(!message.member.hasPermission("MANAGE_SERVER")) return message.reply("ㄴㄴ");
 if(!args[0] || args[0 == "help"]) return message.reply("사용법: ~prefix <명령어>");
 
 let prefixes = JSON.parse(fs.readFileSync("./prefixes.json", "utf8"))
 
 prefixes[message.guild.id] = {
  prefixes: args[0]
 };
 
 fs.writeFile(
 
}

module.exports.help = {
 name: "prefix"
 }
