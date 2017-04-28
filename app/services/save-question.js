import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service('store'),
  saveQuestion(params) {
    var newQuestion = this.get('store').createRecord('answer', params);
    var user = params.user;
    var question = params.question;
    user.get('answers').addObject(newQuestion);
    question.get('answers').addObject(newQuestion);
    newQuestion.save().then(function() {
      return user.save();
    }).then(function() {
      return question.save();
    })
  },
});
