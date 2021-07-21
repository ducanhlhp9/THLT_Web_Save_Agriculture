import React,{Component} from 'react';
import './Footer.css';
import {
  Link
} from "react-router-dom";

class Footer extends Component {
    render(){
        return(
          <div className="footer-bot">
            <div className="w3layouts-newsletter ">
            <div classNameName="row">
              <div className="w3ls-social-icons-2 col-md-4">
                <h3>Connect With Us On Social</h3>
                <a className="facebook" href="#">
                  <i className="fa fa-facebook"></i>
                </a>
                <a className="twitter" href="#">
                  <i className="fa fa-twitter"></i>
                </a>
                <a className="pinterest" href="#">
                  <i className="fa fa-google-plus"></i>
                </a>
                <a className="linkedin" href="#">
                  <i className="fa fa-linkedin"></i>
                </a>
              </div>

              </div>
              <div className="clearfix"> </div>
            </div>
            <div className="container">
              <div className="row">
              <div className="col-3 logo2">
                <h2>
                  <Link to="/">
                    <span>F</span>or
                    <span>C</span>ommunity</Link>
                </h2>
              </div>
              <div className="col-9 ftr-menu">
                <ul>
                  <li>
                    <Link to='/'>Home</Link>
                  </li>
                  <li>
                    <Link className="scroll" to='/nongsan'>Nông Sản</Link>
                  </li>
                  <li>
                    <Link className="scroll" to="/dongvat">Động Vật</Link>
                  </li>
                </ul>
              </div>
              </div>
              <div className="clearfix"></div>
            </div>
          </div>
        )
    }
}
export default Footer;
