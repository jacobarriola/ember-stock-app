import Ember from 'ember';

export default Ember.Controller.extend({

  isEverythingShown: true,

  stocksArr: [
    {
      name:"Apple",
      currentPrice:"160",
      symbol:"AAPL"
    },
    {
      name:"Tesla",
      currentPrice:"1600",
      symbol:"TES"
    },
    {
      name:"OpenX",
      currentPrice:"130",
      symbol:"PNX"
    },
    {
      name:"Microsoft",
      currentPrice:"260",
      symbol:"SOFT"
    }
  ],

  hurraySomethingHappened(valArg){
    Ember.$('body').css('background-color', '#3ea9f5');
  },

  actions:{
    changeData(){

      var msElem = this.get('stocksArr').objectAt(0);
      Ember.set(msElem, 'symbol', '$$$');

      // var newEntry = {
      //   name: "Microsoft",
      //   currentPrice:"100",
      //   symbol: "$$$"
      // };
    },

    deleteData(){
      // alert('delete');
      this.get('stocksArr').removeAt(0);
    },

    secretThing(v){
      // alert('yo');
      this.hurraySomethingHappened(v);
    }
  }

});
