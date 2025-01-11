/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from '#start/kernel'
import db from '@adonisjs/lucid/services/db'

const UsersController = () => import('#controllers/users_controller')
const SessionController = () => import('#controllers/session_controller')

router.get('/', async () => {
  return {
    hello : 'world',
  }
})

router.post('/login', [SessionController, 'store'])
router.get('/session', [SessionController, 'index'])
// .use(middleware.auth({ guards: ['api'] }))

router.get('/users', [UsersController, 'index'])
router.get('/users/:id', [UsersController, 'show'])

router.post('/users', [UsersController, 'create'])

router.get('/tracks', async () => {
  return await db.from('tracks').exec()
})
router.get('/bikes', async () => {
  return await db.from('bikes').exec()
})
