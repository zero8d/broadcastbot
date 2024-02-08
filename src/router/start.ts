import { Composer, InlineKeyboard } from 'grammy'
import { MyContext } from '..'
import { channelLink } from '../config/config'

export const start = new Composer<MyContext>()

export async function startInit(ctx: MyContext) {
  ctx.session.name = (ctx.from?.first_name || '') + (ctx.from?.last_name || '')
  ctx.session.username = ctx.from?.username + ''
  const inlineKeyboard = new InlineKeyboard()
    .url(ctx.t('follow-channel'), channelLink)
    .text(ctx.t('verify-follow'), 'verify_follow')
  ctx.reply(ctx.t('welcome-message'), { reply_markup: inlineKeyboard })
}
