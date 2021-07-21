import React from 'react';

function Progress(props){
  const style={
    width: props.wi
  }
  return(
    <div className="progress">
      <div className="progress-bar progress-bar-striped bg-color" role="progressbar" style={style}  aria-valuenow="50" aria-valuemin="0" aria-valuemax="100" div="">
      </div>
    </div>
  )

}
export default Progress
