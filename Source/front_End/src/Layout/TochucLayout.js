import React, { useEffect, useState } from 'react'
import { observer } from 'mobx-react'
import "./layout.css"
import Frame from '../Component/Frame/Frame';
import  { listNongsan, listproduct, listspeciesCategory, listtochuc, listtochucCategory } from '../Component/Product/store';
import ShowProduct from '../Component/Show/ShowProduct';
function TochucLayout(props){
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
    function showin(category,data){
      let result = null
      result = category.map(value=>{
        console.log("object");
          let data1 = data.filter(abc=>abc.cat_id === value.id)
        console.log(data1)
          let status = (value.status ===1 ) ? "cần giải cứu gấp":"bình thường"
          return(
            <div>
                <h4><b>{value.name}</b></h4>
                <ShowProduct title="Tổ Chức" data={data1} ></ShowProduct>
            </div>
          )
      })
      return result
    }
    console.log(listtochuc.listproduct);
    console.log(listtochucCategory.listspeciesCategory)
    return(
      <div>
      <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <div class="slider-info banner-view bntc1  bg bg2" data-selector=".bg.bg2">
                <div class="banner-info">
                  <div class="container">
                    <div class="banner-info-bg mr-auto">
                      <h5>Vì hạnh phúc của mọi người</h5>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <div class="slider-info  banner-view bntc2 bg bg2" data-selector=".bg.bg2">
                <div class="banner-info">
                  <div class="container">
                    <div class="banner-info-bg mr-auto">
                      <h5>Vì một Việt nam phát triển</h5>
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
          {showin(listtochucCategory.listspeciesCategory,listtochuc.listproduct)}
        </div>
      </div>
    )
}
export default observer(TochucLayout)
