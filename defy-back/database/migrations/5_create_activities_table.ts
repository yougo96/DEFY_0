import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'activities'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('name').notNullable()
      table.string('description').nullable()
      table.json('image_json').nullable()
      table.json('gps_json').nullable()
      table.dateTime('date', { useTz: true, precision: 6 }).nullable()

      table.integer('user_id').references('users.id').notNullable()
      table.integer('bike_id').references('bikes.id').notNullable()
      table.integer('track_id').references('tracks.id').notNullable()

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}