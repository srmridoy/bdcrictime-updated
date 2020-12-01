import React from 'react';
import {Link, Redirect, useHistory} from 'react-router-dom';
import Encryption from 'object-encrypt-decrypt';

import logo from '../assets/img/site-main-logo.svg';
import { Helmet } from 'react-helmet';

function Profile() {
  const history = useHistory();
  const user = localStorage.getItem('InRva2VuIg==') ? Encryption.decrypt(localStorage.getItem('InRva2VuIg==')) : null;
  

  const logout = () => {
    localStorage.removeItem('InRva2VuIg==')
    history.push('/login');
  }

  if(!localStorage.getItem('InRva2VuIg==')) {
    return <Redirect to="/login" />
  }
  return (
    <>
      <Helmet>
        <title>{user.user_display_name+' - BDCricTime'}</title>
      </Helmet>
      {/*    login-area-stert*/}
      <div className="login-area">
        <div className="container log-c">
          <div className="full-login-text">
            <div className="full-login">
            <form>
              <div className="row">
                <div className="col-lg-12">
                  <div className="login-logo">
                    <Link to="/"><img src={logo} alt="" /></Link>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-12">
                  <div className="login-form">
                    <div className="login-contact">
                      Logged In As<br/>
                      <h3 style={{color: '#07888A'}}>{user.user_display_name}</h3>
                    </div>
                  </div>
                </div>
              </div>
            </form>
            </div>
            <div className="bottom-log">
              <div className="row">
                <div className="col-lg-12">
                  <div className="login-signup">
                    <h3>Want to logout ?</h3>
                    <button type="submit" onClick={logout}>Logout</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Profile;
