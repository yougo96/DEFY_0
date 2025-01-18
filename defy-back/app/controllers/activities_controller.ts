import type { HttpContext } from '@adonisjs/core/http'
import Activitie from '#models/activitie'

export default class ActivitiesController {
  async index({ auth }: HttpContext) {
    let data = await Activitie.query().from('activities').select('id', 'name').exec()
    return data
  }

  async show({ params, response }: HttpContext) {
    let data = await Activitie.query().from('activities').where('id', params.id).first()
    if (data) {
      return data
    } else {
      return response.status(404).send({ error: 'Activitie not found' })
    }
  }

  async store({ request, response }: HttpContext) {
    const { name, trackId, bikeId, date, description, images, gps, userId } = request.only(['name', 'trackId', 'bikeId', 'date', 'description', 'images', 'gps', 'userId'])
    return await Activitie.create({
      name: name,
      description: description,
      // imageJson: JSON.parse(images),
      // gpsJson: JSON.parse(gps),
      date: date,
      userId: 1,
      bikeId: bikeId,
      trackId: trackId,
    })
  }
}
