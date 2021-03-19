module.exports = async (client) =>{
    const guild = client.guilds.cache.get('817499498779377695');
    setInterval(() =>{
        const memberCount = guild.memberCount;
        const channel = guild.channels.cache.get('817500568472911899');
        channel.setName(`Member Count ${memberCount.toLocaleString()}`);
        console.log('Updating Member count');
    }, 5000);
}
