import React from 'react';
import {Link, useHistory} from 'react-router-dom';

function Signup() {
  const history = useHistory();
    
    return (
        <>
 
  <div className="login-area">
    <div className="container log-b">
      <div className="full-login-text">
        <div className="full-login">
          <div className="row">
            <div className="col-lg-12">
              <div className="login-logo">
                <img src="assets/img/site-main-logo.svg" alt="" />
              </div>
              <div className="login-cre">
                <h4><span>Create New Account</span></h4>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              <div className="signup-input-area">
                <div className="user">
                  <Link to="#"><i className="fas fa-user" /></Link>
                  <img src="assets/img/usser-plus.svg" alt="" />
                </div>
                <div className="single-input-fl">
                  <div className="single-input">
                    <input type="text" placeholder="First Name*" />
                  </div>
                  <div className="single-input">
                    <input type="text" placeholder="Last Name*" />
                  </div>
                </div>
                <div className="single-ful">
                  <input type="email" placeholder="E-mail Address*" />
                </div>
                <div className="single-input-fl">
                  <div className="single-input">
                    <input type="tel" placeholder="Mobile Number" />
                  </div>
                  <div className="single-input">
                    <input type="text" placeholder="Date of Birth" />
                  </div>
                </div>
                <div className="single-input-fl">
                  <div className="single-input">
                    <div className="single-pass">
                      <input type="password" placeholder="Password*" />
                      <img src="assets/img/eye-icon.svg" alt="" />
                    </div>
                  </div>
                  <div className="single-input">
                    <div className="single-pass">
                      <input type="password" placeholder="Confirm Password*" />
                      <img src="assets/img/eye-icon.svg" alt="" />
                    </div>
                  </div>
                </div>
                <div className="single-input-fl">
                  <div className="single-input">
                    <div className="single-pass">
                      <input type="text" placeholder="Gender*" />
                      <img src="assets/img/eye-icon.svg" alt="" />
                    </div>
                  </div>
                  <div className="single-input">
                    <div className="single-pass">
                      <input type="text" placeholder="Type Security Code Below" />
                    </div>
                  </div>
                </div>
                <div className="capture">
                  <span>3032020</span>
                  <img src="assets/img/relod.svg" alt="" />
                </div>
                <div className="sin-btn">
                  <button type="submit">Sign Up</button>
                  <label className="container-cl">I would like to receive Newsletters
                    <input type="checkbox" defaultChecked="checked" />
                    <span className="checkmark" />
                  </label>
                  <h4><span>Or, log In with</span></h4>
                </div>
                <div className="login-link link-2">
                  <Link to="#"><img src="assets/img/facebook-icon.svg" alt="" />Facebook</Link>
                  <Link to="#" className="color-bt"><img src="assets/img/google-icon.svg" alt="" />Google</Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="bottom-log">
          <div className="row">
            <div className="col-lg-12">
              <div className="login-signup bt">
                <h3>Already have an account ?</h3>
                <button type="submit" onClick={() => history.push('/login')}>Log In</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  {/*signup-area-end*/}




        </>
    );
}

export default Signup;
