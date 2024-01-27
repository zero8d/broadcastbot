import { MyContext } from '..'
import { botAdmins } from '../config/config'
import Session from '../models/session'
const botAdminsString = botAdmins.map(String)
console.log(botAdminsString)
export const getAllUsers = async () => {
  const users = await Session.aggregate([
    { $match: { key: { $nin: botAdminsString }, 'value.blocked': false } },
    { $group: { _id: '$key' } },
  ])
  const userIds = users.map(el => el._id)
  return userIds
}

export const setBlocked = async (userid: number) => {
  return Session.updateOne({ _id: userid }, { 'value.blocked': true })
}
