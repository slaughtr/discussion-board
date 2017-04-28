import DS from 'ember-data'

export default DS.Model.extend({
  name: DS.attr(),
  userID: DS.attr(),
  photoURL: DS.attr(),
  questions: DS.hasMany('question', {async: true}),
  answers: DS.hasMany('answer', {async: true}),
  // points: (parseInt(this.questions.points) + parseInt(this.answers.points))
})
