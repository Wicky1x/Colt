module.exports = {
    name: 'economy-help',
    description: "this is a axl command!",
    execute (client, message, args, Discord){
        const newEmbed = new Discord.MessageEmbed()
       .setColor('random')
       .setTitle('Commands')
       .setDescription('Beg,Bal,Daily,Give,Monthly.')
       .setFooter('Stores coming soon!')
       
       
        
       

       
       
       
       
       
       
       message.channel.send(newEmbed);


    }
} 