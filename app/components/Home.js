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
              <div className="col-md-8">
                <img src='img/xmas_12_days_d11_header.gif'></img>
                <img src='img/xmas_12_days_d11_header.png'></img>
              </div>
              <div className="col-md-4">
                fdjaslfjdalkfjdaskldasgdas
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Home;
