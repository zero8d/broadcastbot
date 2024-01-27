import { NextFunction } from 'grammy'
import { MyContext } from '..'
import { botAdmins } from '../config/config'

export default (ctx: MyContext, next: NextFunction) => {
  if (botAdmins.includes(Number(ctx.chat?.id))) {
    next()
  }
}
