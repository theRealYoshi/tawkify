import React from 'react';
import {Link} from 'react-router';

class Footer extends React.Component {
  render() {
    return (
      <footer>
        <div className='container'>
          <div className='row'>
              <p>Online only offer expires in 24 hours, limit 1 per person.
                One time special pricing will accurate upon package completion.
                3 months free upon completion of 9 month client acceptance.
                Free member forfeited upon early 1st termination. Not combinable
                with other offers or discounts. Reque on refund and T&C portions
                apply.
              </p>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
