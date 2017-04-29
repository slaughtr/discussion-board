import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service('store'),
  saveQuestion(params) {
    var newQuestion = this.get('store').createRecord('question', params);
    var user = params.user;
    user.get('questions').addObject(newQuestion);
    newQuestion.save().then(function() {
      return user.save();
    })
  },
});
