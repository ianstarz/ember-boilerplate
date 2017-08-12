import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    const properties = this.store.findAll('property');
    return { properties };
  }
});
