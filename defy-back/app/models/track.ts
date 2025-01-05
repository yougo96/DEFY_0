import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Track extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare altName: string | null

  @column()
  declare description: string | null

  @column()
  declare imageJson: string | null

  @column()
  declare gpsJson: string | null

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
}