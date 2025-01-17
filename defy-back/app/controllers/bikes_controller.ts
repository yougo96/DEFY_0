import type { HttpContext } from '@adonisjs/core/http'
import Bike from '#models/bike'

export default class BikesController {
  async index() {
    let data = await Bike.query().from('bikes').select('id').exec()
    return data
  }

  async show({ params, response }: HttpContext) {
    let data = await Bike.query().from('bikes').where('id', params.id).first()
    if (data) {
      return data
    } else {
      return response.status(404).send({ error: 'Bike not found' })
    }
  }
}
