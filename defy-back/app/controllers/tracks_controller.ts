import type { HttpContext } from '@adonisjs/core/http'
import Track from '#models/track'

export default class TracksController {
  async index() {
    let data = await Track.query().from('tracks').select('id', 'name').exec()
    return data
  }

  async show({ params, response }: HttpContext) {
    let data = await Track.query().from('tracks').where('id', params.id).first()
    if (data) {
      return data
    } else {
      return response.status(404).send({ error: 'Track not found' })
    }
  }
}
