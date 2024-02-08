import { Composer, InlineKeyboard } from 'grammy'
import { MyContext } from '..'
import { getAllUsers, setBlocked } from '../controllers/session'
import sleep from '../utils/sleep'

export const main = new Composer<MyContext>()
main.on('message', async ctx => {
  const users = await getAllUsers()
  let sentCount = 0
  const started = await ctx.reply(ctx.t('main-broadcast-started'))
  for (const userid of users) {
    try {
      await ctx.copyMessage(userid)
      sentCount++
    } catch (error) {
      await setBlocked(userid)
    }
    if (sentCount % 30) {
      await ctx.api.editMessageText(
        ctx.chat.id,
        started.message_id,
        ctx.t('main-broadcast-finished', { userCount: users.length, sentCount })
      )
    }
  }
  await ctx.reply('🏁')
})
export function showLangs(ctx: MyContext) {
  const inlineKeyboard = new InlineKeyboard()
  inlineKeyboard.text("O'zbekcha 🇺🇿", 'lang_uz')
  inlineKeyboard.text('Русский 🇺🇿', 'lang_uz')
  inlineKeyboard.text('English 🇺🇿', 'lang_uz')
  ctx.reply(ctx.t('select-lang'), { reply_markup: inlineKeyboard })
}
