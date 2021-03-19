module.exports = {
    name: 'prefix',
    description: "this is a prefix command!",
    execute(client, message, args, Discord){

const newEmbed = new Discord.MessageEmbed()
   .setAuthor(message.author.tag, message.author.displayAvatarURL())
   .setColor('#0cf2eb')
   .setTitle('prefix')
   .setURL('')
   .setDescription('My prefix on this server is .');

const messageEmbed = message.channel.send(newEmbed);
MessageEmbed.react(':white_check_mark:');
}
}