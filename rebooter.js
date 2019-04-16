console.log("리부터 실행됨");




const Discord = require('discord.js');
const bot = new Discord.Client();({disableEveryone: true});
bot.commands = new Discord.Collection();
const API = require("discord.js");
const superagent = require("superagent");
const fs = require("fs");


/*
// file reads-------------------------
fs.readdir("./", (err, files) => {

  if(err) console.log(err);

  let jsfile = files.filter(f => f.split(".").pop() === "js")
  if(jsfile.length <= 0){
    console.log("커맨드를 찾을수 없습니다");
    return;
  }

  jsfile.forEach((f, i) =>{ */


    let props = require(`./core.js`);
	bot.commands.set('core', props);


  let commandfile = bot.commands.get('core')

  commandfile.run;
