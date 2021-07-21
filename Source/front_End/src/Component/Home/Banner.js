import React,{Component} from 'react';
import './Banner.css';
import '../../Animate.css'
import Banner_img from './banner-img';
class Banner extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cl1:"col-1 red",
            cl2:"col-2 white",
            navSearch:1,tech:"0"
        };
      }
    onClick=()=>{
        this.setState({
            cl:"bounceInDown"
        })
    }
    handleChange(e){
        this.setState({
          tech: e.target.value
        })
      }
    show=()=>{
        if (this.state.navSearch===1){
            if (this.state.cl1 !=="col-1 red"){
                this.setState({
                    cl1:"col-1 red",
                    cl2:"col-2 white"
                })
            }

            return(
                <select className=" dropdown-toggle form-control" id="inputGroupSelect01" onChange={this.handleChange.bind(this)} value={this.state.tech}>
                    <option value="0">Nông Sản</option>
                    <option value="1">Động Vật</option>
                    <option value="2">Người Vô Gia Cư</option>
                </select>
            )
        } else {
            if (this.state.cl1 ==="col-1 red")
            this.setState({
                cl1:"col-1  white",
                cl2:"col-2 red"
            })
            return(
                <select className="custom-select dropdown-toggle" id="inputGroupSelect01" onChange={this.handleChange.bind(this)} value={this.state.tech}>
                    <option value="0">Nhận Giải Cứu</option>
                </select>
            )
        }
    }
    chang=(n)=>{
        this.setState({
            navSearch:n
        })
    }
    render(){
        return(
            <div id="carousel-id" class="carousel slide" data-ride="carousel">
              <div class="carousel-inner" role="listbox">
                <Banner_img content="Save The World" classimg="w3layouts-banner-top banner-1"></Banner_img>
                <Banner_img content="Plant Trees Now" classimg="w3layouts-banner-top banner-2"></Banner_img>
                <Banner_img content="For Community" classimg="w3layouts-banner-top banner-3"></Banner_img>
              </div>
            </div>
        )
    }
}
export default Banner;
