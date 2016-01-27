import alt from '../alt';
import HomeActions from '../actions/HomeActions';

class HomeStore {
  constructor() {
    this.bindActions(HomeActions);
    this.days = [];
    this.numRemaining = null;
    this.salePrice = null;
  }

  onDaysSuccess(){

  }

  onDaysFail(){

  }

  onSalesPriceSuccess(data){
    this.salePrice = data;
  }

  onSalesPriceFail(data){
    // error message
  }

  onNumRemainingSuccess(data){
    this.numRemaining = data;
  }

  onNumRemainingFail(){
    // error message
  }

}

export default alt.createStore(HomeStore);
