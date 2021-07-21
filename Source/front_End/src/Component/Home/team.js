import React from 'react';
import { Link } from 'react-router-dom';
import Team_infor from './team_infor';
function Team(props){

  return(
    <div class="team" id="team">
		<div class="container">
			<div class="title-div">
				<h3 class="tittle">
					<span>M</span>eet Our Team
				</h3>
				<div class="tittle-style">
				</div>
			</div>
      <div class="agileits-team-grids">
        <div className="team row" id="team">

        <Team_infor name="Hoàng anh" img="/img/hoanganh.jpg" fb="https://www.facebook.com/hoanganh.vu.773124" ins=""></Team_infor>
        <Team_infor name="Đức Anh" img="/img/ducanh.png" fb="https://www.facebook.com/hoangduc.anh.1420/" ins=""></Team_infor>
        <Team_infor name="Minh Nguyệt" img="/img/nguyet.png" fb="https://www.facebook.com/NguyetHMMM/" ins=""></Team_infor>
        </div>
			</div>
		</div>
	</div>
  )

}
export default Team
