import { Schema, SchemaTypes, model } from 'mongoose'

const SessionSchema = new Schema({
  key: String,
  value: SchemaTypes.Mixed,
})

export default model('Session', SessionSchema)
