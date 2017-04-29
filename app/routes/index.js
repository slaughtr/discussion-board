import Ember from 'ember'

export default Ember.Route.extend({
  saveQuestion: Ember.inject.service('save-question'),
  saveAnswer: Ember.inject.service('save-answer'),
  model() {
    return this.store.findAll('question', {reload: true}).then(questions => questions.sortBy('timestamp').reverse())
  },
  actions: {
    // upvoteQuestion(params) {
    //   this.get('saveQuestion').addFavorite(params);
    // },
    // downvoteQuestion(params) {
    //   this.get('saveQuestion').removeFavorite(params);
    // },
    saveAnswer(params) {
      this.get('saveAnswer').saveAnswer(params);
    },
    // upvoteAnswer(params) {
    //   this.get('saveAnswer').addFavorite(params);
    // },
    // downvoteAnswer(params) {
    //   this.get('saveAnswer').removeFavorite(params);
    // }
  },


})
