import React, {Component} from 'react';
import './Home.css';
import Banner from './Banner';
import NewProduct from './NewProduct';
import Service from './Service';
import Contact_us from './Contact_us';
import {observer} from 'mobx-react';
import Team from './team';
import Ourproject from './ourproject';
import {listproduct, listtochuc} from '../Product/store';
import Axios from 'axios';

require('dotenv').config()
function FormError(props) {
  if (props.isHidden) {return null;}
  return (
    <div className="form-warning">
      {props.errorMessage}
    </div>
  )
}
class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      length: 0,
      name:'',
      gmail:'',
      phone:'',
      message:'',
      isInputValid: true,
      errorMessage: ''
    };
  }
  validateInput=(checkingText) => {

    const regexp = /^\d{10,11}$/;
    // regular expression - checking if phone number contains only 10 - 11 numbers

    if (regexp.exec(checkingText) !== null) {
      return {
        isInputValid: true,
        errorMessage: ''
      };
    } else {
      return {
        isInputValid: false,
        errorMessage: 'Số điện thoại phải có 10 - 11 chữ số.'
      };
    }
  }
  handleInputValidation = (event) => {
    const { isInputValid, errorMessage } = this.validateInput(this.state.phone);
    this.setState({
      isInputValid: isInputValid,
      errorMessage: errorMessage
    })
  }
   scrollToTop=()=> {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  componentDidMount() {
    this.scrollToTop()
    Axios.get('/api/user').then(res => {
      console.log(res.data);
      this.setState({
        length: res.data.length
      })
    })
  }
  onChange =(e)=>{
    // console.log(e.target)
    var name=e.target.name;
    var value=e.target.value;
    this.setState({
      [name]:value
    })
  }
  submitcontact=()=>{
    Axios.post('/api/contact',{name:this.state.name, email:this.state.gmail,phone:this.state.phone , message:this.state.message} )
      .then(res=>{})
}
  render() {
    // console.log(listproduct.listproduct)
    return (
      <div className="home">
        <Banner></Banner>
        <div class="banner-bottom-w3l" id="about">
          <div class="container">
            <div class="title-div">
              <h3 class="tittle">
                <span>W</span>elcome
              </h3>
            </div>
            <div class="welcome-sub-wthree row">
              <div class="col-md-5 col-sm-12 banner_bottom_left">
                <h4>About
                  <span> Project</span>
                </h4>
                <p>Việt Nam là một đất nước nông nghiệp. Mỗi năm có rất nhiều các loại nông sản được bà con nông dân sản
                  xuất, gieo trồng nhằm mục đích tiêu thụ trong nước và xuất khẩu.
                  Nhưng có một vấn đề rất nan giải trong nhiều năm qua đó là : Nông sản được mùa nhưng mất giá.</p>
                <p>Với mục đích nhằm giải quyết vấn đề đó, nhóm chúng tôi đề xuất một công cụ giúp người nông dân có thể
                  kết nối đến người tiêu dùng, doanh nghiệp tiêu thụ một cách dễ dàng hơn.
                </p>
                <p>Website: Giải cứu</p>
              </div>
              <div class="col-md-7 col-sm-12 stats-info-agile">
                <div class="w3l-right-stats">
                  <div class="stats-grid stat-border">
                    <div class='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='768'
                         data-delay='.5' data-increment="1">{listproduct.listproduct.length}</div>
                    <p>SÓ BÀI VIẾT</p>
                  </div>
                  <div class="stats-grid">
                    <div class='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='678'
                         data-delay='.5' data-increment="1">{this.state.length}</div>
                    <p>SÓ NGƯỜI DÙNG</p>
                  </div>
                  <div class="stats-grid stat-border border-st2">
                    <div class='numscroller numscroller-big-bottom' data-slno='1' data-min='0' data-max='800'
                         data-delay='.5' data-increment="1">{listtochuc.listproduct.length}</div>
                    <p>SÓ TỔ CHỨC</p>
                  </div>
                </div>
              </div>
              <div class="clearfix"></div>
            </div>
          </div>
        </div>
        <div class="agileits-services" id="services">
          <div class="container">
            <div class="title-div">
              <h3 class="tittle">
                <span>S</span>ervices
              </h3>
            </div>
            <div class="agileits-services-row row">
              <Service title="Giải Cứu Nông Sản"
                       content="Giải cứu các loại nông sản, hoa màu gặp tình trạng được mùa nhưng mất giá"
                       to="/nongsan"></Service>
              <Service title="Giải Cứu Động Vật"
                       content="Giải cứu các loại động vật đang trong sách đỏ, động vật lang thang, hải sản không xuất khẩu được"
                       to="/dongvat"></Service>
              <Service title="Liên Kết Tổ Chức"
                       content="Xây dựng một cộng đồng gồm các doanh nghiệp, tổ chức tham gia vào quá trình giải cứu"
                       to="/organization"></Service>
            </div>

          </div>
        </div>
        <Team></Team>
        {/*<Ourproject></Ourproject>*/}
        <div class="contact" id="contact">
          <div class="title-div">
            <h3 class="tittle">
              <span>C</span>ontact Us
            </h3>
          </div>
          <div className="row">

            {/*<div class="col-md-6 ">*/}
            {/*  <div className="contact_grids_info">*/}
            {/*    <h5 class="small-title">Visit Us</h5>*/}
            {/*    <div className="row">*/}
            {/*      <Contact_us name="HOANG ANH"  gmail="VMHA@gmail.com" phone="0853538197"></Contact_us>*/}
            {/*      <Contact_us name="HOANG DUC ANH" gmail="HDA@gmail.com" phone="0853538197"></Contact_us>*/}
            {/*      <Contact_us name="MINH NGUYET"  gmail="HMN@gmail.com" phone="0853538197"></Contact_us>*/}
            {/*    </div>*/}
            {/*  </div>*/}
            {/*</div>*/}
            <div class="col-md-12 map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3724.6763231528553!2d105.8412638153544!3d21.00560799394312!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ac76ccab6dd7%3A0x55e92a5b07a97d03!2zVHLGsOG7nW5nIMSQ4bqhaSBo4buNYyBCw6FjaCBraG9hIEjDoCBO4buZaQ!5e0!3m2!1svi!2sin!4v1607954284959!5m2!1svi!2sin"></iframe>
            </div>
          </div>
        </div>
        <div class="second-contact-agile row">
          <div class="col-md-6 form-bg">
            <form>
              <div class="contact-fields">
                <input type="text" name="name" placeholder="Name" required="" value={this.state.name} onChange={this.onChange} ></input>
              </div>
              <div class="contact-fields">
                <input type="email" name="gmail" placeholder="Email" required="" value={this.state.gmail} onChange={this.onChange}></input>
              </div>
              <div class="contact-fields">
                <div><input
                  type="text"
                  ref="phone"
                  name="phone"
                  className="borderinput"
                  placeholder="phone"
                  onChange={this.onChange}
                  onBlur={this.handleInputValidation}
                  value={this.state.phone}
                  required />
                  <FormError
                    isHidden={this.state.isInputValid}
                    errorMessage={this.state.errorMessage} /></div>
              </div>
              <div class="contact-fields">
                <textarea name="message" placeholder="Message" required="" value={this.state.message} onChange={this.onChange}></textarea>
              </div>
              <button onClick={this.submitcontact} value="Submit">submit</button>
            </form>
          </div>
          <div class="col-md-6 address-left-second">
            <div class="address-grid">
              <h5 class="small-title">Contact Info</h5>
              <div class="address-grids">
                <span class="fa fa-volume-control-phone" aria-hidden="true"></span>
                <div class="contact-right">
                  <p>Số điện thoại </p>
                  <span>+84942410953</span>
                </div>
                <div class="clearfix"></div>
              </div>
              <div class="address-grids">
                <span class="fa fa-envelope-o" aria-hidden="true"></span>
                <div class="contact-right">
                  <p>Địa chỉ Mail </p>
                  <a href="mailto:forcommunity@gmail.com">info@example.com</a>
                </div>
                <div class="clearfix"></div>
              </div>
              <div class="address-grids">
                <span class="fa fa-map-marker" aria-hidden="true"></span>
                <div class="contact-right">
                  <p>Địa chỉ </p>
                  <span>Ha Noi University of Science and Technology - Viet Nam</span>
                </div>
                <div class="clearfix"></div>
              </div>
              <div class="address-grids">
                <span class="fa fa-calendar" aria-hidden="true"></span>
                <div class="contact-right">
                  <p>Giờ làm việc </p>
                  <span>8:00 Am -> 17:00 PM Tất cả các ngày trong tuần</span>
                </div>
                <div class="clearfix"></div>
              </div>
            </div>
          </div>
          <div class="clearfix"></div>
        </div>
        <NewProduct></NewProduct>
      </div>
    )
  }
}

export default observer(Home);
