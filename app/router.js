import Ember from 'ember'
import config from './config/environment'

const Router = Ember.Router.extend({location: config.locationType, rootURL: config.rootURL})

Router.map(function() {
  // this.route('application.js')
  // this.route('index')
  // this.route('question')
  // this.route('user')
})

export default Router
