import React,{Component} from 'react';
import './Product.css';
import { observer } from 'mobx-react'
import { Link } from 'react-router-dom';
// import Banner from './Banner';
// import NewProduct from './NewProduct';
class Lq extends Component {
    constructor(props) {
        super(props);
        this.state = {
            a:0
        }
      }
    show=(data,id,id1)=>{
        var result=null;
        let dem=0;
        if (data.length>0){
          result=data.map((user,index)=>{
            console.log(user)
            // console.log(index)
            var link="/uploads"
            let as_img=new String(user.image1)
            console.log(as_img,user.image1)
            var explode = as_img.split('__');
            var link1=explode[0];
            var link2=link1.split('-')
            link=link+'/'+link2[0]+'/'+link2[1]+'/'+link2[2]+"/"+as_img
            console.log(link);
            var link3='/product/'+user.slug+"/"+user.id
            console.log(link3);
            if (dem<2 && user.spe_cat_id===id && user.id!==id1){
              dem=dem+1;
              return (
                <Link to={link3}>
                  <div className="row bantin" key={user.id}>
                      <div className="col-5">
                      <img src={link} width="100%" margin-right="15%" alt="anh"></img>
                      </div>
                      <div className="col-7">
                          {user.name}
                      </div>
                  </div>
                </Link>
              )
            }

          })
          return result
        }
    }
    render(){
        // console.log(this.props.data)
        return(
          <div className="col-4">
              <div className="panel tochuc">
                  <div class="panel-heading">
                      <h1 class="panel-title"><b>Đơn Vị Tổ Chức</b></h1>
                  </div>
                  <div>
                      <p>a</p>
                      <p>a</p>
                      <p>a</p>
                  </div>
              </div>
              <div className="panel lienquan">
                  <div class="panel-heading">
                      <h1 class="panel-title"><b>Bản Tin Liên Quan</b></h1>
                  </div>
                  <div>
                      {this.show(this.props.data,this.props.id,this.props.id1)}
                  </div>
              </div>
          </div>
        )
    }
}
export default observer(Lq);
