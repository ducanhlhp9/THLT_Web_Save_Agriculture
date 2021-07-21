import React,{Component} from 'react';
import Header from '../src/page/Header/Header';
import Body from '../src/page/Body/Body';
import Footer from '../src/page/Footer/Footer';
import Axios from 'axios';
import './index.css'
import { listproduct, listspeciesCategory, listtochuc, listtochucCategory, listuser, user } from './Component/Product/store';
import {BrowserRouter as Router,
} from "react-router-dom";
import { observer } from 'mobx-react';

class Main extends Component{
    constructor(props) {
        super(props);
        this.state = {
          prevScrollpos: window.pageYOffset,
          class:"navbar navbar-expand-lg teal",
          class1:"ShowProduct",
          top:"return-to-top none",
          bottom:"return-to-bottom",
          height:1000000000
        };
      }
      componentDidMount() {
        // let id = localStorage.getItem('id')
        // let id = localStorage.getItem()
        // user.changeuser()
        Axios.get("/api/species").then(res=>{
          listproduct.changlistproduct(res.data)
          console.log(res.data);
        })
        // console.log(listproduc);
        Axios.get('/api/speciesCategory').then(res=>{
          listspeciesCategory.change(res.data)
        })
        Axios.get('/api/organizationCategory').then(res=>{
          listtochucCategory.change(res.data)
        })
        Axios.get('/api/organization').then(res=>{
          listtochuc.changlistproduct(res.data)
        })
        Axios.get('/api/user').then(res=>{
          listuser.changlistuser(res.data)
        })
        // console.log("object");
        window.addEventListener("scroll", this.handleScroll);

      }

      componentWillUnmount() {
        window.removeEventListener("scroll", this.handleScroll);

      }
      handleScroll = () => {

        const currentScrollPos = window.pageYOffset;
        const node = this.node;
        this.setState({
          prevScrollpos: currentScrollPos
        });
        // console.log(this.state.prevScrollpos)
        // console.log(node.scrollHeight);
        if (this.state.prevScrollpos>1){
          this.setState({
            class:"navbar navbar-expand-lg teal navbar2",
            class1:"ShowProduct mar",
            top:"return-to-top"
          })
        } else {
          this.setState({
            class:"navbar navbar-expand-lg teal",
            class1:"ShowProduct",
            top:"return-to-top none"
          })
        }
        if (node.scrollHeight-this.state.prevScrollpos===890){
          this.setState({
            bottom:"return-to-bottom none"
          })
        } else {
          this.setState({
            bottom:"return-to-bottom"
          })
        }
        // console.log(this.state.height,this.state.prevScrollpos)
      };
      scrollToTop() {
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      }
      componentWillUpdate() {
        const node = this.node;
        // if (this.state.height!==node.scrollHeight){
        //   this.setState({
        //     height:node.scrollHeight
        //   })
        // }
    }
      scrollToBottom=()=> {
        window.scrollTo({
          top:this.state.height ,
          behavior: "smooth"
        });
        // console.log(height)
      }
    render(){
      let id= localStorage.getItem('id')
      let name= localStorage.getItem('name')
      let phone= localStorage.getItem('phone')
      let address= localStorage.getItem('address')
      let email=localStorage.getItem('email')
      // console.log(listuser.listuser);
      if (id !== null) {
        if (user.id !== id){
          user.changeuser(name,id,phone,address,email)
        }
      } else {
        if (user.id !== 0){
          user.changeuser('',0,'','','')
        }
      }
        return(
            <div ref={(node) => { this.node = node; }}>
                <Body class={this.state.class} class1={this.state.class1}></Body>
                <Footer></Footer>
                <div  className={this.state.top} onClick={this.scrollToTop} data-toggle="tooltip"><i className="icon-chevron-up"></i></div>
                <div  className={this.state.bottom} onClick={this.scrollToBottom} data-toggle="tooltip"><i className="icon-chevron-down"></i></div>
            </div>
        )
    }
}
export default observer(Main)


