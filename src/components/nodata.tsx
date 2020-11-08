import React from 'react';
import img from '../images/noData.svg'


export default function NoData () {
  return(
    <div className="row justify-content-center py-5">
      <img src={img} alt="There us no data yet "/>
    </div>
  )
}