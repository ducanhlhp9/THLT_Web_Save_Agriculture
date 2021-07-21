import React,{Component} from 'react';
import { observer } from 'mobx-react'
// import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import './Login.css'
import axios from "axios"
import { Redirect } from 'react-router-dom';
import { user } from '../Product/store';
// import axois from "axois"
// import {Redirect} from 'react-router-dom'
function FormError(props) {
  if (props.isHidden) {return null;}
  return (
    <div className="form-warning">
        {props.errorMessage}
    </div>
  )
}
class Login extends Component {
  constructor (props) {
    super(props)
    this.state = {
      kq:"that bai",
      requre:"",
      status:"login",
      username:"",
      password:"",name:"",
      nameadmin:"chua dang nhap",
      phone:'',
      address:'',
      value: '',
      isInputValid: true,
      errorMessage: ''
    }
 }
  onChange =(e)=>{
    var name=e.target.name;
    var value=e.target.value;
    this.setState({
      [name]:value
    })
  }
  requre=()=>{
    if (this.state.requre!==''){
      return(
        <div className="li">
          <span>{this.state.requre}</span>
        </div>
      )
    }
  }
  showform(){
    if (this.state.status==="login"){
      return(this.showlogin())
  } else {
    return(this.showregister())
  }
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

  showlogin=()=>{
    return(
      <div className="login1">
        {this.requre()}
        <div   className="lo">
            <div ><input placeholder="Username"  type="text" name="username" ref="username" className="borderinput" value={this.state.username} onChange={this.onChange} ></input></div>
            <div><input placeholder="Password"  type="password" name="password" ref="password" className="borderinput"  value={this.state.password} onChange={this.onChange}></input></div>
            <button   className="hvr-sweep-to-left1" onClick={this.login.bind(this) }><b>ĐĂNG NHẬP</b></button>
        </div>
      </div>
    )
  }
  showregister=()=>{
    return(
      <div className="login1">
        {this.requre()}
        <div   className="lo">
            <div ><input placeholder="Name"  type="text" name="name" ref="name" className="borderinput" value={this.state.name} onChange={this.onChange} ></input></div>
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

            <div ><input placeholder="Address"  type="text" name="address" ref="address" className="borderinput" value={this.state.ad} onChange={this.onChange} ></input></div>
            <div ><input placeholder="Username"  type="text" name="username" ref="username" className="borderinput" value={this.state.username} onChange={this.onChange} ></input></div>
            <div><input placeholder="Password"  type="password" name="password" ref="password" className="borderinput"  value={this.state.password} onChange={this.onChange}></input></div>
            <button type="submit"  className="hvr-sweep-to-left1" onClick={this.register.bind(this) }><b>Đăng Ký</b></button>
        </div>
      </div>
    )
  }
  changstatus=(id)=>{
    if (id===2){
      this.setState({
        status:"register"
      })
    } else {
      this.setState({
        status:"login"
      })
    }
  }
  login(){
    var {username,password }=this.refs;
    console.log(username.value,password.value)
   axios.post('/api/login',{email:username.value,password:password.value})
    .then(res=>{
      console.log(res.data);
      if (res.data!==undefined){
        console.log(res.data);
        // console.log(res.data.user)
        user.changeuser(res.data.user[0].name,res.data.user[0].id,res.data.user[0].phone,res.data.user[0].address,res.data.user[0].email)
        localStorage.setItem ('name', res.data.user[0].name);
        localStorage.setItem ('id', res.data.user[0].id);
        localStorage.setItem ('phone', res.data.user[0].phone);
        localStorage.setItem ('address', res.data.user[0].address);
        localStorage.setItem ('email', res.data.user[0].email);
        this.setState({
          kq:"thanh cong"
        })
        // <Redirect to="/"></Redirect>
      }

   })
    .catch(err => console.log(err))
  }
  register(){
    var {username,password,name,phone,address }=this.refs;
    console.log(username.value,password.value,phone.value)
   axios.post('/api/register',{email:username.value,password:password.value,name:name.value,address:address.value,phone:phone.value})
    .then(res=>{
      console.log(res.data);
      if (res.data!==undefined){
        console.log(res.data);
        console.log(res.data.user)
        user.changeuser(res.data.user.name,res.data.user.id,res.data.user.phone,res.data.user.address,res.data.user.email)
        localStorage.setItem ('name', res.data.user.name);
        localStorage.setItem ('id', res.data.user.id);
        localStorage.setItem ('phone', res.data.user.phone);
        localStorage.setItem ('address', res.data.user.address);
        localStorage.setItem ('email', res.data.user.email);
        this.setState({
          kq:"thanh cong"
        })
        console.log("object");
      }

   })
    .catch(err => console.log(err))
  }
  componentDidMount(){
    console.log("abc")
    this.setState({
      status:this.props.st
    })
  }
  render(){
    // console.log(this.state.requre)
    if (this.state.kq==="thanh cong"){
      return <Redirect to="/"/>
    } else {
      return (

        <div className="login">
          <div className="container">
                <h3 ><i onClick={()=>{this.changstatus(1)}} name="login">Login</i> <i onClick={()=>{this.changstatus(2)}}>Register</i></h3>
              {this.showform()}

          </div>
        </div>
        )
    }

    }
}

export default observer(Login);
