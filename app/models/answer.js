import DS from 'ember-data'

export default DS.Model.extend({
  text: DS.attr(),
  timestamp: DS.attr(),
  user: DS.belongsTo('user', {async: true}),
  question: DS.belongsTo('question', {async: true}),
  // points: DS.attr()
})
