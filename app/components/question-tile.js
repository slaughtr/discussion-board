import Ember from 'ember';

export default Ember.Component.extend({
 getUser: Ember.inject.service('get-user'),
  canSeeAnswers: false,
  actions: {
    seeAnswers: function() {
      this.toggleProperty('canSeeAnswers');
    },
    saveAnswer: function() {
      var user = this.get('getUser').getUser(this.get('userid'));
      user.then(result => {
        var params = {
          text: this.get('text'),
          timestamp: "test",
          question: this.get('question'),
          user: result
        };
        this.set('text', '');
        this.sendAction('saveAnswer', params);
      });
    },
  }
});
