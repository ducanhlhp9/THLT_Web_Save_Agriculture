import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import "./layout.css"
import Frame from '../Component/Frame/Frame';
import  { listNongsan, listproduct, listspeciesCategory } from '../Component/Product/store';
import ShowProduct from '../Component/Show/ShowProduct';
function DongvatLayout(props){
  // console.log(listproduct.nongsan(17));
  // const [data,setdata] = useState([])
  // useEffect(()=>{
  //     setdata(listproduct.nongsan(17))
  // },[])
  //   // const data=listproduct.nongsan(17)
  //   if (listproduct.nongsan.length === undefined){
  //     data.push(listproduct.nongsan(17))
  //     console.log("A");
  //   }
    // console.log(data1)
    // console.log(data);
    // let data1=new Array(listproduct.nongsan(17))
    // data1.flat()
    // listNongsan.changlistproduct(data1[0])
    // // console.log(listNongsan.listproduct)
    // console.log(data1[0]);
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  useEffect(()=>{
    // scrollToTop()
  })
    function showin(category,data){
      let result = null
      result = category.map(value=>{
        console.log("object");
        if (value.cat_id===4){
          let data1 = data.filter(abc=>abc.spe_cat_id === value.id)
          let status = (value.status ===1 ) ? "cần giải cứu gấp":"bình thường"
          return(
            <div>
                <h4><b>{value.name+'( '+status+" )"}</b></h4>
                <ShowProduct title="Động Vật" data={data1} ></ShowProduct>
            </div>
          )
        }
      })
      return result
    }
    console.log(listspeciesCategory.listspeciesCategory);
    return(
      <div>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="slider-info banner-view banner-dv1 bg bg2" data-selector=".bg.bg2">
                <div class="banner-info">
                  <div class="container">
                    <div class="banner-info-bg mr-auto">
                      <h5>ĐỘNG VẬT LÀ BẠN CỦA CON NGƯỜI</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="slider-info  banner-view banner-dv2 bg bg2" data-selector=".bg.bg2">
                <div class="banner-info">
                  <div class="container">
                    <div class="banner-info-bg mr-auto">
                      <h5>CHUNG TAY GIẢI CỨU ĐỘNG VẬT</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
        <div className="pd container">
          {showin(listspeciesCategory.listspeciesCategory,listproduct.nongsan(4))}
        </div>
      </div>
    )
}
export default observer(DongvatLayout)
