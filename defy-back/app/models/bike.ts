import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class Bike extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column()
  declare name: string

  @column()
  declare brand: string
  
  @column()
  declare model: string

  @column()
  declare year: Number

  @column()
  declare class: string

  @column()
  declare description: string

  @column()
  declare imgJson: JSON

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime
}