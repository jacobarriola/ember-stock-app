import Ember from 'ember';

export default Ember.Controller.extend({

  isUserLoggedIn: true,

  actions: {
    sendNameWasClicked() {
      alert(this.get('firstName'));
    },

    secondAction() {

    }
  }

});
