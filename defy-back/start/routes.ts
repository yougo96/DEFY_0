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
const TracksController = () => import('#controllers/tracks_controller')
const BikesController = () => import('#controllers/bikes_controller')
const ActivitiesController = () => import('#controllers/activities_controller')

router.get('/', async () => {
  return {
    hello: 'welcome on DEFY api',
  }
})

router.post('/login', [SessionController, 'store'])
router.get('/session', [SessionController, 'index'])
// .use(middleware.auth({ guards: ['api'] }))

router.get('/users', [UsersController, 'index'])
router.get('/users/:id', [UsersController, 'show'])

router.post('/users', [UsersController, 'create'])

router.get('/tracks', [TracksController, 'index'])
router.get('/tracks/:id', [TracksController, 'show'])

router.get('/bikes', [BikesController, 'index'])
router.get('/bikes/:id', [BikesController, 'show'])

router.get('/activities', [ActivitiesController, 'index'])
router.get('/activities/:id', [ActivitiesController, 'show'])
