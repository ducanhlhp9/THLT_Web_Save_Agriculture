import React,{Component} from 'react';
import './Header.css'
import axios from "axios"
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react'
import { user } from '../../Component/Product/store';
class Header extends Component {

  show(id){
      if (id!==null){
        return(
          <div className="container">
            <i className="fas fa-phone-alt header_phone "> 0853538197 </i>
            <i className="fas fa-envelope header_mail"> vuminhhoanganh12@gmail.com</i>
            <span className='aa'>
                <a href="/"><i className="fas fa-sign-in-alt space-right  " onClick={this.logout} > ĐĂNG XUẤT</i></a>
              </span>
              <span className='aa'><a href="history"><i className="fas fa-user space-left grey" > {user.name}</i></a></span>
        </div>

        )
      } else {
        return(
          <div className="container">
            <i className="fas fa-phone-alt header_phone "> 0853538197 </i>
            <i className="fas fa-envelope header_mail"> vuminhhoanganh12@gmail.com</i>
            <span className='aa'>
              <Link to="/login"><i className="fas fa-sign-in-alt space-right dropdown-toggle aa grey"> Đăng Nhập  </i></Link>
            </span>
            <span className='aa'>
            <Link to="/register"><i className="fas fa-sign-in-alt space-right dropdown-toggle aa grey" >  Đăng Ký   </i></Link>
            </span>
        </div>
        )
      }
  }
  logout(){
    localStorage.clear()
    user.dl()

  }
    render(){
      var name = localStorage.getItem('name');
      console.log(user.id)
        return(
            <div className="header">
                {this.show(user.id)}
            </div>
        )
    }
}
export default observer(Header);
