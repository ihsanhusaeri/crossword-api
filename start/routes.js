'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

Route.get('/', () => {
  return { greeting: 'Hello world in JSON' }
})

Route.group(()=>{
  Route.get('users', 'UserController.index').middleware(['auth:jwt'])
  Route.get('users/:id', 'UserController.show').middleware(['auth:jwt'])
  Route.post('users','UserController.store')
  Route.put('users/:id', 'UserController.update').middleware(['auth:jwt'])
  Route.delete('users/:id', 'UserController.delete').middleware(['auth:jwt'])
  // Route.get('answers', 'AnswerController.index').middleware(['auth:jwt'])
  Route.get('answers', 'AnswerController.index')
  Route.get('answers/:crosswordId', 'AnswerController.show')
  Route.get('answers/crossword/:id', 'AnswerController.showByCrossword')
  Route.get('users_crossword', 'UserCrosswordController.index')
  Route.get('users_answer/:id', 'UserAnswerController.show')
  Route.patch('user_answer/update', 'UserAnswerController.update')
  Route.patch('user_crossword/update', 'UserCrosswordController.update')
}).prefix('api/')


Route.group(() => {
  Route.post('login', 'AuthController.postLoginJwt').as('loginJwt')
  Route.post('refresh', 'AuthController.postRefreshTokenJwt').as('refreshTokenJwt').middleware(['auth:jwt'])
  Route.post('logout', 'AuthController.postLogoutJwt').as('loginJwt').middleware(['auth:jwt'])
  Route.get('profile', 'AuthController.getProfileJwt').as('profileJwt').middleware(['auth:jwt'])
}).prefix('api/auth')