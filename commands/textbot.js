const API = require("discord.js");

module.exports.run = async (bot, message, args) => {
 let title;
 let one;
 let onedes;
 let footer;

    const filter = (m) => m.author.id === message.author.id;
    message.channel.send("제목을 입력해주세요. (취소하고싶으면 '취소' 입력)").then((q) => q.delete(60000));
    message.channel.awaitMessages(filter, {
		max: 1,
		time: 60000
    }).then((collected) => {
        let titleinput = collected.first().content;
		if (titleinput === "취소") { message.channel.send("취소되었습니다.").then((q) => q.delete(2000)); } else {
 title = titleinput
                        }
                    }
                }
            }

    const filter = (m) => m.author.id === message.author.id;
    message.channel.send("부제목을 입력해주세요. (취소하고싶으면 '취소' 입력)").then((q) => q.delete(60000));
    message.channel.awaitMessages(filter, {
        max: 1,
        time: 60000
    }).then((collected) => {
        let butitle = collected.first().content;
        collected.delete();
        if (cbody === "취소") { message.channel.send("취소되었습니다.").then((q) => q.delete(2000)); } else {
one = butitle
                    }
                }
            }

    const filter = (m) => m.author.id === message.author.id;
    message.channel.send("내용을 입력해주세요. (취소하고싶으면 '취소' 입력)").then((q) => q.delete(60000));
    message.channel.awaitMessages(filter, {
        max: 1,
        time: 60000
    }).then((collected) => {
        let backg = collected.first().content;
        collected.delete();
        if (backg === "취소") { message.channel.send("취소되었습니다.").then((q) => q.delete(2000)); } else {
  onedes = backg
                                    }
                                }
                            }
                        }
                    }
                }
            }

    const filter = (m) => m.author.id === message.author.id;
    message.channel.send(`설명을 적어주세요.`).then((q) => q.delete(60000));
    message.channel.awaitMessages(filter, {
        max: 1,
        time: 60000
    }).then((collected) => {
        let textinput = collected.first().content;
        collected.delete();
        if (textinput === "취소") { message.channel.send("취소되었습니다.").then((q) => q.delete(2000)); } else {
            footer = textinput;


                        let hentaiEmb = new API.RichEmbed()
                        .setTitle(title)
                        .setColor('#00ffc1')
                        .addField(one, onedes)
                        .setFooter(footer);
                        message.channel.send(hentaiEmb);
       }
    });

        }
    });

        }
    });

        }
    });
    
};

module.exports.help = {
    name: "텍스트박스"
};
