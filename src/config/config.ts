export const botAdmins = (<string>process.env.BOT_ADMINS)
  .split(',')
  .map(el => Number(el))
export const channelId = Number(<string>process.env.CHANNEL_ID)
export const channelLink = <string>process.env.CHANNEL_LINK
