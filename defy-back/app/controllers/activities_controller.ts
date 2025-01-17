import type { HttpContext } from '@adonisjs/core/http'
import Activitie from '#models/activitie'

export default class ActivitiesController {
  async index() {
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
}
