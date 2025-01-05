import factory from '@adonisjs/lucid/factories'
import Activity from '#models/activity'

export const ActivityFactory = factory
  .define(Activity, async ({ faker }) => {
    return {}
  })
  .build()