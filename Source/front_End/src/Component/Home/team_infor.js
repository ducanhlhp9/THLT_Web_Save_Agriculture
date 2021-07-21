import React from 'react';
import { Link } from 'react-router-dom';
function Team_infor(props){

  return(
      <div className="col-md-4 col-sm-6 agileits-team-grid">
      <div className="team-info">
        <img src={props.img} alt=""></img>
        <div className="team-caption">
          <h4>{props.name}</h4>
          <ul>
            <li>
              <a href={props.fb}>
                <i className="fa fa-facebook"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
            </li>
            <li>
              <a href="#">
                <i className="fa fa-rss"></i>
              </a>
            </li>
          </ul>
        </div>
      </div>
	</div>
  )

}
export default Team_infor
