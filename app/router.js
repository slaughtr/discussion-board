import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({location: config.locationType, rootURL: config.rootURL})

Router.map(function() {
  this.route('application.js')
  this.route('new-question'),
  this.route('question', {path: '/question/:question_id'})
  // this.route('user')
  this.route('new-question');
})

export default Router
