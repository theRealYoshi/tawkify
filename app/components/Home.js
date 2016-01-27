import React from 'react';
import {Link} from 'react-router';
import HomeStore from '../stores/HomeStore';
import NavbarStore from '../stores/NavbarStore';
import HomeActions from '../actions/HomeActions';
import ImageTag from './ImageTag';
import {first, without, findWhere} from 'underscore';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = NavbarStore.getState();
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    NavbarStore.listen(this.onChange);
  }

  componentWillUnmount() {
    NavbarStore.unlisten(this.onChange);
  }

  onChange(state) {
    this.setState(state);
  }

  handleClick(character) {
    var winner = character.characterId;
    var loser = first(without(this.state.characters, findWhere(this.state.characters, { characterId: winner }))).characterId;
    HomeActions.vote(winner, loser);
  }

  render() {
    var divStyle = {
      backgroundImage: 'url(img/xmas_12_days_d11_landing.jpg)' // switch this with image src.
    };
    return (
      <div className='background-image-container' style={divStyle}>
          <div className="container">
            <div className="row">
              <div className="col-md-8" >
                <div className="header-image-overlay">
                  <img src='img/xmas_12_days_d11_header.gif' className="gif-image"></img>
                  <img src='img/xmas_12_days_d11_header.png' className="static-image"></img>
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
                          <div className="value">$1198</div>
                        </div>
                        <div className="header-limited">LIMITED OFFER 0 REMAINING</div>
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
                        <p>Sold Out</p>
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
