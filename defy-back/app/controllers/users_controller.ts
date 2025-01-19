import type { HttpContext } from '@adonisjs/core/http'
import User from '#models/user'

export default class UsersController {
  async index() {
    let data = await User.query().from('users').select('id').exec()
    return data
  }

  async show({ params, auth, response }: HttpContext) {
    let data = await User.query().from('users').where('id', params.id).first()
    if (data) {
      delete data.password
      return data
    } else {
      return response.status(404).send({ error: 'User not found' })
    }
  }

  async create({ request }: HttpContext) {
    const { name, avatar, email, password } = request.only(['name', 'avatar', 'email', 'password'])
    return await User.create({
      name: name,
      avatar: avatar,
      email: email,
      password: password,
    })
  }
}
