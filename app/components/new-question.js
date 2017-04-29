import Ember from 'ember';

export default Ember.Component.extend({
  getUser: Ember.inject.service('get-user'),
  actions: {
    saveQuestion: function() {
      var user = this.get('getUser').getUser(this.get('userid'));
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
