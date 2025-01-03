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

router.get('/', async () => {

  let result = await db.from('users').first()

  return {
    hello : 'world',
    'Test db > first user' : result,
  }
})
