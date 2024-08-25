onst menu = {
    _meal: ' ' ,
    _price: 0  ,
    
    set meal(mealToCheck) { 
      if (typeof mealToCheck === 'string'){
    return (this._meal = mealToCheck);
      }
    },
  
    set price(priceToCheck) {
      if (typeof priceToCheck === 'number'){
        return(this._price = priceToCheck);
      }
    },
  
    get todaysSpecial() {
      if (this._meal && this._price) {
        return ( `Today's special is ${this._meal}` + ' for $' + `${this._price}!`)
      } else {
        return 'meal or price not set correctly'
      }
        }
    
  }
  
  menu.meal = 'pizza' ;
  menu.price = 8.99;
  console.log(menu.todaysSpecial);