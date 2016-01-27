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
                      <div>
                        <h4>Get 3 months for the price of 2</h4>
                        <h2>$1198</h2>
                        <p>LIMITED OFFER 0 REMAINING</p>
                      </div>
                    </li>
                    <li className="options-list-item">Personal Matchmaker</li>
                    <li className="options-list-item">Matches Guaranteed:</li>
                    <li className="options-list-item">Recruiters search to your specs</li>
                    <li className="options-list-item">
                      <p>All matches handpicked and personally screened</p>
                      <p>Creative curated date experiences</p>
                    </li>
                    <li className="options-list-item">Dating insights and guidance</li>
                    <li className="options-list-item-pricing">$1198 / 3 months - saves $599</li>
                    <li className="options-list-item-availability">Sold Out</li>
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
