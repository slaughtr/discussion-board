import Ember from 'ember';

export default Ember.Route.extend({
  saveQuestion: Ember.inject.service('save-question'),
  actions: {
    saveQuestion (params) {
      this.get('saveQuestion').saveQuestion(params)
      this.transitionTo('index')
    },
  }
});
