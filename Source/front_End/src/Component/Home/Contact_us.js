import React from 'react';

function Contact_us(props){

  return(
    <div class="col-4 contact_grid">
      <div class="contact_grid_right">
        <h4> {props.name}</h4>
        <p>{props.street}</p>
        <p>{props.city}</p>
      </div>
      <div class="address-row">
        <h5>Mail Us</h5>
        <p>
          <p > {props.gmail} </p>
        </p>
      </div>
      <div class="address-row">
        <h5>Call Us</h5>
        <p>{props.phone}</p>
      </div>
    </div>
  )

}
export default Contact_us
