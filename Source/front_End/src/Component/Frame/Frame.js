import React,{Component} from 'react';
import './Frame.css';
import '../../hover.css'
import { Link } from 'react-router-dom';
function Frame(props)  {
  // console.log(props)
        var link="/uploads"
        let img=String(props.img)
        var explode =img.split('__');
        var link1=explode[0];
        var link2=link1.split('-')
        link=link+'/'+link2[0]+'/'+link2[1]+'/'+link2[2]+"/"+img
        // console.log(link)
        if (props.title === 'Tổ Chức') {
          var link3='/tochuc/'+props.link+"/"+props.id
        } else {
          var link3='/product/'+props.link+"/"+props.id
        }
        // console.log(link3)
        return(
          <div className="img-box col-lg-4 col-md-6">
            <img src={link} alt="product" className="img-responsive "></img>
            <h5 className="my-2"><b><Link to={link3}> {props.as_name}</Link></b></h5>
            <p className="para">{props.as_description_seo}</p>
          </div>
        )
}
export default Frame;
