import React,{Component, useEffect, useState} from 'react';
import { observer } from 'mobx-react'
import './Product.css';
import Axios from 'axios';
import Lq from './Lq';
import {listlq, listproduct, listtochuc, listtochucCategory, listuser, product, productinfor, user} from './store';
import Rating from '../Rating/Rating';
import { Link } from 'react-router-dom';
// import Banner from './Banner';
// import NewProduct from './NewProduct';
function Product(props) {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         currentPage:1,
    //         newsPerPage:9,
    //         pageNumbers:1,
    //         data:[],
    //         data1:[],
    //         link1:"1",
    //         link2:"2",
    //         link3:"3"
    //     }
    //   }
    // componentDidMount(){
    //     var id=this.props.match.params.id
    //     var url='/api/articleSpecies/'+id
    //     console.log(this.props.match.params.id)
    //     let data=listproduct.product(this.props.match.params.id)
    //     console.log(data)
    //     Axios.get(url).then(res=>{
    //         this.changel(res.data.as_images1,"link1")
    //         this.changel(res.data.as_images2,"link2")
    //         this.changel(res.data.as_images3,"link3")
    //         this.setState({
    //                 data:res.data
    //             })
    //         })
    //     var url1='/api/articleSpecies/articleSpeciesSame/'+id
    //     Axios.get(url1).then(res=>{
    //       this.setState({
    //         data1:res.data
    //       })
    //     })
    // }
    function scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    }

    useEffect(()=>{
      scrollToTop();
      var url1='/api/articleSpecies/articleSpeciesSame/'+props.match.params.id
      Axios.get(url1).then(res=>{
        listlq.changlistproduct(res.data)
      })
      // Axios.get(`/api/species/${props.match.params.id}`).then(res=>{
      //   productinfor.changdata(res.data)
      // })
      console.log("object");
      Axios.get("/api/comment")
        .then(res=>{
          let id1= Number(props.match.params.id)
          let data1=res.data.filter(value=>value.species_id===id1)
          console.log(data1,res.data,id1);
          setlistcmt(data1)
        })
    },[props.match.params.id])

    function cmt(event){
      if (event.keyCode == 13 || event.which == 13){
        if (user.id === null){

        }
        // console.log('abc');
        Axios.post("/api/comment",{user_id:user.id,species_id:data.id,content:cmt1})
        .then(res=>{
        // console.log(res.data);
          Axios.get("/api/comment")
          .then(res=>{
            // console.log(res.data);
            let id1= Number(props.match.params.id)
            let data1=res.data.filter(value=>value.species_id===id1)
            console.log(data1,res.data,id1);
            setlistcmt(data1)
            setcmt1('')
          })
        })

      }
    }
    function showcmt(data,id){
      // console.log(data,id);
      let result=null
      result=data.map(value=>{
        let usercmt=listuser.listuser.find(abc=>abc.id===value.user_id)
          return(
            <div className="txtCmt row">
              <div className="col-1">
                <i class="far fa-user"></i>
              </div>
              <div className="col-9">
                  <b>{usercmt.name}</b>
                  <p>{value.content}</p>
              </div>
            </div>
          )
      })
      return result
    }

    function changel(img1,abc){
        // var name=abc;
        var link="/uploads"
        var explode = img1.split('__');
        var link1=explode[0];
        var link2=link1.split('-')
        link=link+'/'+link2[0]+'/'+link2[1]+'/'+link2[2]+"/"+img1
        // console.log(link)
        return link
    }
    function showRa(data){
      if (data.cat_id ===3){
        return (
           <Rating img={changel(data.image1)}></Rating>
        )
      }
    }
    function showbt(title){
      console.log(title)
      if (title!=="Tổ chức"){
        return (
          <Link to={`/registration/${data.id}`}><button className="hvr-sweep-to-right">Nhận Giải Cứu</button></Link>
        )
    }}
    function showtitle(data,title) {
      console.log(data)
      if (title ==='Tổ chức'){
        if (data.cat_id===1){
          return(
            <span>
            Giải Cứu <i className="fas fa-angle-right"></i> Đội Tình Nguyện <i className="fas fa-angle-right"></i> {data.name}
          </span>
          )
        } else {
          return(
            <span>
            Giải Cứu <i className="fas fa-angle-right"></i> Doanh Nghiệp <i className="fas fa-angle-right"></i> {data.name}
          </span>
          )
        }
      } else
      if (data.cat_id==3){
        return(
          <span>
            Giải Cứu <i className="fas fa-angle-right"></i> Nông Sản <i className="fas fa-angle-right"></i> {data.name}
          </span>
        )
      } else {
        return(
          <span>
            Giải Cứu <i className="fas fa-angle-right"></i> Động Vật <i className="fas fa-angle-right"></i> {data.name}
          </span>
        )
      }
    }
    // render(){
    const [cmt1,setcmt1]=useState('')
    const [listcmt,setlistcmt]=useState([])
    function changcmt(e){
      setcmt1(e.target.value)
    }
      let data=1
      if (props.Name==="Tổ chức") {
        data=listtochuc.product(props.match.params.id)
      } else{
        data=listproduct.product(props.match.params.id)
      }
      console.log(listtochucCategory)
      // console.log(productinfor.infor);
      if (data!==undefined){
        return(
          // <div></div>
            <div className="ShowProduct">

                <div className="pSearch">
                Tìm kiếm <i class="fas fa-search"></i></div>
                <div className="pTitle">
                    <div className="container">
                        {/*<span>*/}
                        {/*     Giải Cứu <i class="fas fa-angle-right"></i> {} <i class="fas fa-angle-right"></i>  {data.as_name}*/}
                        {/*</span>*/}
                      {showtitle(data ,props.Name)}
                    </div>
                 </div>
                 <div className="product">
                    <div className="container">
                        <div className="row">
                            <div className="col-8">
                                <p className="title"><b> {data.as_title}</b></p>
                                <p>{data.create_at}</p>
                                <img src={changel(data.image1)} width="70%" margin-right="15%" alt="anh"></img>
                                <p><b>{data.as_description}</b></p>
                                <div dangerouslySetInnerHTML={{ __html: data.content1 }}></div>
                                <img src={changel(data.image2)} width="70%" margin-right="15%" alt="anh"></img>
                                <div dangerouslySetInnerHTML={{ __html: data.content2 }}></div>
                                <img src={changel(data.image3)} width="70%" margin-right="15%" alt="anh"></img>
                                <div dangerouslySetInnerHTML={{ __html: data.content3 }}></div>
                              {showbt(props.Name)}
                                {/*<Link to={`/registration/${data.id}`}><button className="hvr-sweep-to-right">Nhận Giải Cứu</button></Link>*/}
                            </div>
                            <Lq data={listproduct.listproduct} id={data.spe_cat_id} id1={data.id}></Lq>
                        </div>
                    </div>
                 </div>
                 {
                    showRa(data)
                 }
                 <div className="cmt">
                     <div className="container">
                        <h3>Bình Luận</h3>
                        <div className="tCmt">
                            <b>Sô lương : {listcmt.length} bình luận</b>
                            <div className="row">
                                <b className="col-7">Sắp Xếp Theo </b>
                                <select className="custom-select dropdown-toggle col-5" id="inputGroupSelect01">
                                    <option selected>Mới Nhất</option>
                                    <option value="1">Cũ Nhất</option>
                                </select>
                            </div>

                         </div>
                         {showcmt(listcmt,data.id)}
                          <div className="txtCmt">
                              <i class="far fa-user"></i>
                              <input placeholder="CMT" value={cmt1} onChange={changcmt} onKeyPress={cmt}></input>
                          </div>
                    </div>
                 </div>
            </div>
        )
      } else {
        return(
          <div></div>
        )
      }
    // }
}
export default observer(Product);
