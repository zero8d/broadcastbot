import { Composer } from 'grammy'
import { MyContext } from '..'

export const start = new Composer<MyContext>()

export async function startInit(ctx: MyContext) {
  ctx.session.state = 'main' // send user to main state
  ctx.session.name = (ctx.from?.first_name || '') + (ctx.from?.last_name || '')
  ctx.session.username = ctx.from?.username + ''
  ctx.reply(ctx.t('welcome-message'))
}
