export const botAdmins = (<string>process.env.BOT_ADMINS)
  .split(',')
  .map(el => Number(el))
