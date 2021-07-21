import React from 'react';
import Progress from './Progress';
import "./Rating.css"
function Rating(props){
  return(
    <div className="w3l-recent-work">
      <div className="jst-two-col">
        <div className="container">
      <div className="row">
      <div className="my-bio col-xl-6">
        <h3>ĐÁNH GIÁ</h3>
        <div className="details-details">
          <div className="my-bar-grids">
            <h4>Hương Vị<span> 80% </span></h4>
              <Progress wi="80%"></Progress>

          </div>
          <div className="my-bar-grids">
            <h4>Chất Lượng<span> 60% </span></h4>

            <Progress wi="60%"></Progress>
          </div>
          <div className="my-bar-grids">
            <h4>Màu Sắc<span> 70% </span></h4>

            <Progress wi="70%"></Progress>
          </div>
          <div className="my-bar-grids">
            <h4>Giá Thành<span> 60% </span></h4>

            <Progress wi="60%"></Progress>
          </div>
        </div>
    </div>
    <div className="col-xl-6 ">
      <img src={props.img} alt="product" className="img-responsive about-me"></img>
    </div>
    </div>
        </div>
      </div>
</div>
  )

}
export default Rating
