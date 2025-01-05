// import type { HttpContext } from '@adonisjs/core/http'
import db from '@adonisjs/lucid/services/db'

export default class UsersController {
    async index() {
        let result = await db.from('users').exec()
        return result
    }

    async show({ params }: HttpContext) {
        let result = await db.from('users').where('id', params.id).first()
        return result
    }


}