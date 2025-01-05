/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import db from '@adonisjs/lucid/services/db'

const UsersController = () => import('#controllers/users_controller')

router.get('/', async () => {
  return {
    hello : 'world',
  }
})

router.get('/users', [UsersController, 'index'])
router.get('/users/:id', [UsersController, 'show'])

router.get('/tracks', async () => {

  let result = await db.from('tracks').exec()

  return {
    result,
  }
})
