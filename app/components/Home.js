import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore';
import HomeActions from '../actions/HomeActions';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = HomeStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    // updates sale price and number of available spots remaining remaining;
    // HomeActions.findSalePrice();
    // HomeActions.findNumRemaining();
    HomeStore.listen(this.onChange);
  }

  componentWillUnmount() {
    HomeStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleClick() {
  }

  render() {
    console.log(this.props.params.dayNum);
    console.log(this.state.numRemaining);
    var dayNum = this.props.params.dayNum;
    var soldOut = true;
    var availability;
    if (soldOut){
      // change color based on message
      availability = "Sold Out";
    } else {
      // include numRemaining in here
      availability = "x remaining"
    }

    //switch these out with the day numbers
    var headerImageStatic = "img/xmas_12_days_d11_header.png";
    var headerImageGif = "img/xmas_12_days_d11_header.gif";
    var saleValue = "$1198";

    var numRemaining = "LIMITED TIME OFFER 0 REMAINING";
    var divStyle = {
      backgroundImage: 'url(img/xmas_12_days_d11_landing.jpg)',
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat"
    };


    return (
      <div className='background-image-container' style={divStyle}>
          <div className="container">
            <div className="row">
              <div className="col-md-8" >
                <div className="header-image-overlay">
                  <img src={headerImageGif} className="gif-image"></img>
                  <img src={headerImageStatic} className="static-image"></img>
                </div>
              </div>
              <div className="col-md-4">
                <div className='options-container'>
                  <ul className='options-list'>
                    <li className='options-list-header'>
                      <div className='options-list-header-container'>
                        <div className="header-description">GET 3 MONTHS FOR THE PRICE OF 2</div>
                        <span className="glyphicon glyphicon-info-sign"/>
                        <div className="header-value">
                          <div className="value">{saleValue}</div>
                        </div>
                        <div className="header-limited">{numRemaining}</div>
                      </div>
                    </li>
                    <li className="options-list-item">
                      <div className="options-list-item-container">
                        <p>Personal Matchmaker</p>
                        <span className="glyphicon glyphicon-chevron-right"/>
                      </div>
                    </li>
                    <li className="options-list-item">
                      <div className="options-list-item-container">
                        <p>Matches Guaranteed:</p>
                        <span className="glyphicon glyphicon-chevron-right"/>
                      </div>
                    </li>
                    <li className="options-list-item">
                      <div className="options-list-item-container">
                        <p>Recruiters search to your specs</p>
                        <span className="glyphicon glyphicon-chevron-right"/>
                      </div>
                    </li>
                    <li className="options-list-item">
                      <div className="options-list-item-container">
                        <p>All matches handpicked and personally screened</p>
                        <p>Creative curated date experiences</p>
                        <span className="glyphicon glyphicon-chevron-right"/>
                      </div>
                    </li>
                    <li className="options-list-item">
                      <div className="options-list-item-container">
                        <p>Dating insights and guidance</p>
                        <span className="glyphicon glyphicon-chevron-right"/>
                      </div>
                    </li>
                    <li className="options-list-item-pricing">
                      <div className="options-list-item-container">
                        <p>$1198 / 3 months - saves $599</p>
                      </div>
                    </li>
                    <li className="options-list-item-availability">
                      <div className="options-list-item-container">
                        <p>{availability}</p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Home;
