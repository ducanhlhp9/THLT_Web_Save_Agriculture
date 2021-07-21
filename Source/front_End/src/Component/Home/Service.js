import React from 'react';
import { Link } from 'react-router-dom';
function Service(props){
console.log(props.to);
  return(
    <div class="col-md-4 col-sm-6 agileits-services-grids row">
      <div class="col-xs-3 wthree-ser">
        <i class="fa fa-tint" aria-hidden="true"></i>
      </div>
      <div class="col-xs-9 wthree-heading">
        <h4>{props.title}</h4>
      </div>
      <div class="clearfix"></div>
      <p>{props.content}</p>
      <Link to={props.to}  class="w3-buttons">Read More</Link>
    </div>
  )

}
export default Service
