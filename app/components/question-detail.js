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
    upvoteQuestion: function() {
      var user = this.get('getUser').getUser(this.get('userid'));
      user.then(result => {
        var params = {
          question: this.get('question'),
          user: result
        }
        this.sendAction('upvoteQuestion', params)
      })
    },
    downvoteQuestion: function() {
      var user = this.get('getUser').getUser(this.get('userid'));
      user.then(result => {
        var params = {
          question: this.get('question'),
          user: result
        }
        this.sendAction('downvoteQuestion', params)
      })
    },
    upvoteAnswer: function() {
      var user = this.get('getUser').getUser(this.get('userid'));
      user.then(result => {
        var params = {
          answer: this.get('answer'),
          user: result
        }
        this.sendAction('upvoteAnswer', params)
      })
    },
    downvoteAnswer: function() {
      var user = this.get('getUser').getUser(this.get('userid'));
      user.then(result => {
        var params = {
          answer: this.get('answer'),
          user: result
        }
        this.sendAction('downvoteAnswer', params)
      })
    },
  }
});
