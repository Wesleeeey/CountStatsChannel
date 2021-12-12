const Discord = require('discord.js');
const { token, guild, stats_member, stats_online, stats_voice } = require('./config.json');
const client = new Discord.Client();

client.on('ready', async () => {
    console.log(`Connecté sur ${client.user.tag}`)
});

client.on('ready', async () => {
    var server = client.guilds.cache.get(guild);
    setInterval(() => {
    const memberCount = server.memberCount
    client.channels.cache.get(stats_member).setName(`🌹・Membres : ${memberCount.toLocaleString()}`)
    console.log(`Update Stats Member`)
    }, 300000);
})

client.on('ready', async () => {
    var server = client.guilds.cache.get(guild);
    setInterval(() => {
        const onlineCount = server.members.cache.filter(member => member.presence.status !== "offline").size
    client.channels.cache.get(stats_online).setName(`🌟・Online : ${onlineCount.toLocaleString()}`)
    console.log(`Update Stats Online`)
    }, 300000);
})

client.on('ready', async () => {
    var server = client.guilds.cache.get(guild);
    setInterval(() => {
    const voiceCount = server.members.cache.filter(m => m.voice.channel).size
    client.channels.cache.get(stats_voice).setName(`🐺・Vocal : ${voiceCount.toLocaleString()}`)
    console.log(`Update Stats Voice`)
    }, 300000);
})

client.login(token)
