import React,{Component} from 'react';
import './Body.css';
import {BrowserRouter as Router,
    Route,
    Switch,
    Link
  } from "react-router-dom";
import Home from '../../Component/Home/Home';
// import Show from '../Component/Show/ShowProduct';
import ShowProduct from '../../Component/Show/ShowProduct';
import Product from '../../Component/Product/Product';
import Login from '../../Component/Login/Login';
import Registration from '../../Component/Registration/registration';
import NongsanLayout from '../../Layout/NongsanLayout';
import { listsearch, user } from '../../Component/Product/store';
import { observer } from 'mobx-react';
import Search from "../../Layout/Search"
import Axios from 'axios';
import DongvatLayout from '../../Layout/DongvatLayout';
import Re from '../../Component/Re/Re';
import TochucLayout from '../../Layout/TochucLayout';
class Body extends Component {
  constructor (props) {
    super(props)
    this.state = {
      search:""
    }
 }
 onChange =(e)=>{
  var name=e.target.name;
  var value=e.target.value;
  this.setState({
    [name]:value
  })
}
  logout(){
    localStorage.clear()
    user.dl()

  }
  search=(event)=>{
    // event.preventDefault();
    // let search=this.refs
    Axios.get("/api/articleSpecies").then(res=>{
      listsearch.changsearch(res.data)
    })
    // listsearch.changsearch([])
    console.log(this.state.search);
  }
  show(id){
    // console.log(id,typeof(id));
      if (id!==0){
        return(
          <li className="nav-item">
              <p className="nav-link" onClick={this.logout}>Đăng xuất</p>
          </li>
        )
      } else {
        return(
          <li className="nav-item dropdown">
            <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Đăng Nhập </button>
            <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                <Link to="/login"><p className="dropdown-item"><i className="fas fa-sign-in-alt "> Đăng Nhập  </i></p></Link>
                <Link to="/register"><p className="dropdown-item"><i className="fas fa-sign-in-alt" >  Đăng Ký   </i></p></Link>
            </div>
          </li>
        )
      }
    }
    render(){
        // console.log(this.props.class1)
        return(

            <div className="body">
            <div className="bodyNA">
                <nav className={this.props.class}>
                    <div className="container">
                    <div className="navbar-brand">
                    <img src="/uploads/logongang.png" width="50%"  alt="logo"></img>
                    </div>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <i className="fas fa-bars"></i>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav mr-auto">
                            <li className="nav-item active">
                                <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item dropdown">
                                <button className="nav-link dropdown-toggle" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Giải cứu </button>
                                <div className="dropdown-menu dropdown-primary" aria-labelledby="navbarDropdownMenuLink">
                                    <Link className="dropdown-item" to='/nongsan' >Nông Sản</Link>
                                    <Link className="dropdown-item" to='/dongvat'>Động Vật</Link>
                                </div>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/registration" >Nhận giải cứu</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/organization" >Tổ Chức</Link>
                            </li>
                            {this.show(user.id)}
                        </ul>
                        <form className="form-inline" onSubmit={(event)=>{this.search()}} action="/search">
                            <input className="form-control mr-sm-2" type="text" name="search" ref="search" placeholder="Search" value={this.state.search} onChange={this.onChange} aria-label="Search"></input>
                        </form>
                        <div>{user.name}</div>
                    </div>
                    </div>
                </nav>
              </div>
                <Switch className="abc">
                    <Route path="/" exact component={Home}/>
                    <Route path="/nongsan1" exact render={props =>  <ShowProduct {...props} class={this.props.class1}  Name="nông sản" />}/>
                    <Route path="/nongsan" exact  render={props =>  <NongsanLayout {...props} class={this.props.class1}  Name="nông sản" />}/>
                    <Route path="/dongvat" exact  render={props =>  <DongvatLayout {...props} class={this.props.class1}  Name="Động vật" />}/>
                    <Route path="/organization" exact  render={props =>  <TochucLayout {...props} class={this.props.class1}  Name="Tổ chức" />}/>
                    <Route path="/product/:name/:id" exact component={Product}/>
                    <Route path="/tochuc/:name/:id" exact render={props =>  <Product {...props} Name="Tổ chức" />}/>
                    <Route path="/login" exact render={props =>  <Login {...props} st="login" />}/>
                    <Route path="/register" exact render={props =>  <Login {...props} st="register" />}/>
                    <Route path="/registration/:name" exact component={Registration}/>
                    <Route path="/registration" exact component={Re}/>
                    <Route path="/search" exact render={props =>  <Search {...props} search={this.state.search} />}/>
                </Switch>
          </div>
        )
    }
}
export default observer(Body);
