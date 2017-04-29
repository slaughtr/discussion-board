import Ember from 'ember';

export default Ember.Component.extend({
  store: Ember.inject.service('store'),
  getUser: Ember.inject.service('get-user'),
  actions: {
    saveQuestion: function() {
      var user = this.get('getUser').getUser(this.get('session.currentUser.uid'));
      user.then(result => {
        var params = {
          title: this.get('title'),
          body: this.get('body'),
          timestamp: "test",
          user: result
        };
        this.set('text', '');
        this.sendAction('saveQuestion', params);
      });
    },
  }
});
