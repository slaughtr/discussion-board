import Ember from 'ember'

export default Ember.Route.extend({
  saveQuestion: Ember.inject.service('save-question'),
  saveAnswer: Ember.inject.service('save-answer'),
  store: Ember.inject.service('store'),

  model() {
    return this.store.findAll('question', {reload: true}).then(questions => questions.sortBy('timestamp').reverse())
  },
  actions: {
    saveAnswer(params) {
      this.get('saveAnswer').saveAnswer(params);
    },
  },


})
