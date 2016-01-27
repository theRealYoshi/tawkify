import React from 'react';
import {Link} from 'react-router';
import NavbarStore from '../stores/NavbarStore';
import NavbarActions from '../actions/NavbarActions';

class Navbar extends React.Component {
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

  handleSubmit() {
  }

  handleReRender(){
    NavbarActions.reRenderPage();
  }

  render() {

    return (
      <nav className='navbar navbar-default navbar-static-top'>
        <div className='navbar-container'>
          <div className='navbar-header'>
            <Link to="/">
              <img src="/img/Tawkify_White_Logo.png" className="tawkify-logo"></img>
            </Link>
          </div>
          <div id='navbar' className='navbar-collapse collapse'>
            <ul className='nav navbar-nav navbar-left'>
              <li><Link to='/how'>How It Works</Link></li>
              <li><Link to='/faq'>FAQ</Link></li>
              <li><Link to='/stories'>Stories</Link></li>
              <li><Link to='/signin'>Sign in</Link></li>
            </ul>
            <ul className='nav navbar-nav navbar-right'>
              <li><Link to='/phone' className='screening-text'>1(888)494-7280</Link></li>
              <li>
                <div onClick={this.handleSubmit} className="free-screening-list-item">
                  <div className="free-screening">
                    <span className="glyphicon glyphicon-earphone"/>
                    <div className="free-screening-top">chat with a love expert</div>
                    <div className="free-screening-bottom">CLICK HERE FOR A FREE SCREENING</div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
