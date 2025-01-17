import { BaseSchema } from '@adonisjs/lucid/schema'

export default class extends BaseSchema {
  protected tableName = 'users'

  async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id').notNullable()
      table.string('pseudo').notNullable()
      table.string('avatar').nullable()
      table.string('email', 254).notNullable().unique()
      table.string('password').notNullable()

      table.integer('privilege').notNullable().defaultTo(1)
      table.json('friends').nullable()

      table.timestamp('created_at').notNullable()
    })
  }

  async down() {
    this.schema.dropTable(this.tableName)
  }
}