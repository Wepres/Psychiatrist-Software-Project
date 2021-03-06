import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Doctors extends BaseSchema {
    protected tableName = 'specialists'

    public async up() {
        this.schema.createTable(this.tableName, table => {
            table.increments('id')
            table.string('type')
            table
                .integer('user_id')
                .unique()
                .references('id')
                .inTable('users')
                .onDelete('CASCADE')

            table.timestamps(true)
        })
    }

    public async down() {
        this.schema.dropTable(this.tableName)
    }
}
