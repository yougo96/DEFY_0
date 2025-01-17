import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'activities'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name').notNullable()
      table.string('description').nullable()
      table.json('image_json').nullable()
      table.json('gps_json').nullable()
      table.dateTime('date', { useTz: true, precision: 6 }).nullable()

      table.integer('user_id').references('users.id')
      table.integer('bike_id').references('bikes.id')
      table.integer('track_id').references('tracks.id')

      table.timestamp('created_at')
      table.timestamp('updated_at')
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}