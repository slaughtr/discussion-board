import Ember from 'ember';

export default Ember.Service.extend({
  store: Ember.inject.service('store'),
  saveAnswer(params) {
    var newAnswer = this.get('store').createRecord('answer', params);
    var user = params.user;
    var question = params.question;
    user.get('answers').addObject(newAnswer);
    question.get('answers').addObject(newAnswer);
    newAnswer.save().then(function() {
      return user.save();
    }).then(function() {
      return question.save();
    })
  },
  // upvoteAnswer(params) {
  //   var user = params.user;
  //   var question = params.question;
  //   answer.get('points').addObject(point);
  //   answer.save();
  // },
  // downvoteAnswer(params) {
  //   var user = params.user;
  //   var question = params.question;
  //   answer.get('points').removeObject(point);
  //   answer.save();
  // }
});
