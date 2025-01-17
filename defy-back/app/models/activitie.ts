import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Activitie extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare description: string | null

  @column()
  declare imageJson: string | null

  @column()
  declare gpsJson: string | null

  @column()
  declare date: DateTime | null

  // Relationnal
  @column()
  declare userId: number

  @column()
  declare bikeId: number

  @column()
  declare trackId: number
  

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
}