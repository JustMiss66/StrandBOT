// Guild Events
client.on('guildDelete', guild => {
  console.log(`I have left ${guild.name} at ${new Date()}`);
});

client.on('guildCreate', guild => {
  guild.defaultChannel.sendMessage(`I have joined ${guild.name}`);
});

client.on('guildMemberAdd', member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Please welcome ${member.user.username} to the server!`);
});

client.on('guildMemberRemove', member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Please say goodbye to ${member.user.username} we will miss you!`);
});

client.on('guildMemberSpeaking', (member, speaking) => {
  let guild = member.guild;
  if (member.speaking) {
    guild.defaultChannel.sendMessage(`${member.user.username} is speaking!`);
  }
});

client.on('guildMemberUpdate',(oMember, nMember) => {
  console.log(ddiff(oMember, nMember));
});

client.on('guildUpdate',(oGuild, nGuild) => {
  console.log(ddiff(oGuild, nGuild));
});

client.on('guildBanAdd',(guild, user) => {
  guild.defaultChannel.sendMessage(`${user.username} was just banned!`);
});

client.on('guildBanRemove',(guild, user) => {
  guild.defaultChannel.sendMessage(`${user.username} was just unbanned!`);
});

// Client Events
client.on('channelCreate', channel => {
  console.log(`A ${channel.type} channel by the name of ${channel.name} was created ${channel.createdAt} with the ID of ${channel.id}`);
  if (channel.type === 'text') return channel.sendMessage('You were successful in creating this channel.');
});

client.on('channelDelete', channel => {
  console.log(`A ${channel.type} by the name of ${channel.name} was successfully deleted.`);
  channel.guild.defaultChannel.sendMessage('Channel Deleted');
});

client.on('channelUpdate', (oChannel, nChannel) => {
  console.log(ddiff(oChannel, nChannel));
});

client.on('channelPinsUpdate', (channel, time) => {
  channel.guild.defaultChannel.sendMessage(`The pins for ${channel.name} have been updated at ${time}`);
});

client.on('messageDelete', msg => {
  msg.guild.defaultChannel.sendMessage(`A message with the contents ${msg.cleanContent} was deleted from ${msg.channel}`);
});

client.on('messageDeleteBulk', messages => {
  console.log(`${messages.size} was deleted`);
});