module.exports.run = async (bot, message, args) => {

    let reason = args.join(' ')
    let afklist = bot.afk.get(message.author.id);

    if (!afklist) {
        let construct = {
            id: message.author.id,
            reason: reason
        };

        bot.afk.set(message.author.id, construct);
        return message.channel.send(`
${message.author} 님의 잠수상태가 시작되었습니다
사유: ${reason}`);
    }

};

module.exports.help = {
    name: '잠수'
};
