import alt from '../alt';

class HomeActions {
  constructor() {
    this.generateActions(
      'daysSuccess',
      'daysFail',
      'savingsLookupSuccess',
      'savingsLookupFail',
      'getNumRemainingSuccess',
      'getNumRemainingFail',
      'getSalePriceSuccess',
      'getSalePriceFail'
    );
  }

  findSalePrice(){
    $.ajax({
      url: '/api/tawkify/saleprice'
    })
      .done((data) => {
        this.actions.getSalePriceSuccess(data);
      })
      .fail((data) => {
        this.actions.getSalePriceFail(data);
      });
  }

  findNumRemaining() {
    $.ajax({
      url: '/api/tawkify/numremaining'
    })
      .done((data) => {
        this.actions.getNumRemainingSuccess(data);
      })
      .fail((data) => {
        this.actions.getNumRemainingFail(data);
      });
  }

}

export default alt.createActions(HomeActions);
