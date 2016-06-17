import Ember from 'ember';

export default Ember.Component.extend({
  shopping: Ember.inject.service(),
  totalCostShoppingCart: Ember.computed('shopping.items.[]', function(){
    var totalCost=0;
    for (var item of this.get('shopping.items')) {
      totalCost+= parseInt(item.get('price'));
    }
    debugger;
    return totalCost;
  }),
  actions: {
    removeFromCart(item){
       this.get('shopping').remove(item);
     }
  }
});
