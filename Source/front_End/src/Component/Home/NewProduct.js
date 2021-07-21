import React,{Component} from 'react';
import './NewProduct.css';
import '../../hover.css'
import Frame from '../Frame/Frame';
import Axios from 'axios';
import ShowProduct from "../Show/ShowProduct";
import {listproduct} from "../Product/store";
class NewProduct extends Component {
  constructor(props) {
    super(props);
    this.state = {
        data:[]
    }
  }
  componentDidMount(){

    Axios.get("/api/articleSpecies/").then(res=>{
      // console.log(res.data)
      this.setState({
        data:res.data
      })
    })
}
  Show = (data) => {
    if (data.length>0){
      var result = null;
      result = data.map((menu, index) =>{
          // var link=menu.Link+"_1"
          if (index<4){
            var userid
            if (menu.as_user_id === null) {
                userid='admin'
            } else userid =menu.as_user_id
            // console.log(menu)
            return(
                <Frame key={menu.as_slug} id={menu.id} as_title_seo={menu.as_title_seo} as_description_seo={menu.as_description_seo} link={menu.as_slug} time={menu.created_at} userid={userid} img={menu.as_images1} >  </Frame>
            )
          }

      })
      return result
    }

}
    render(){
        return(
            <div className="">
                <div className="pd container">
                    <p className="p1 animated bounceInUp">CẦN GIẢI CỨU GẤP</p>
                    <ShowProduct data={listproduct.listproduct} ac={1} />
                </div>

            </div>
        )
    }
}
export default NewProduct;
