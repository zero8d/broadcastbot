import { session as grammySession } from 'grammy'
import mongoose from 'mongoose'
import { MongoDBAdapter, ISession } from '@grammyjs/storage-mongodb'
export type SessionData = {
  state: 'start' | 'main'
  name: string
  username: string
  blocked: boolean
  __language_code?: string
}
const collection = mongoose.connection.collection<ISession>('sessions')

export const session = grammySession({
  initial: (): SessionData => ({
    state: 'start',
    blocked: false,
    name: '',
    username: '',
  }),
  storage: new MongoDBAdapter<SessionData>({ collection }),
})
