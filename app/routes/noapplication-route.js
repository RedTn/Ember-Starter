import Ember from 'ember';

const { set } = Ember;

export default Ember.Route.extend({
    activate() {
        set(this.controllerFor('application'), 'displayNav', false);
        this._super();
    },
});
