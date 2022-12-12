import React from 'react'
import Card from './Card'

function DetailCard() {
  return (
    <div className='container-fluid' style={{background:"#fffcf7",padding:"0rem 3rem"}}>
      <div className="row">
        <div className="col-md-6 col-lg-4 col-sm-6 col-*-12 col-card" ><Card reqCount="1000+" reqDetails="Total Registered Student"/></div>
        <div className="col-md-6 col-lg-4 col-sm-6 col-*-12 col-card" ><Card reqCount="6" reqDetails="Request Pending"/></div>
        <div className="col-md-6 col-lg-4 col-sm-6 col-*-12 col-card" ><Card reqCount="500+" reqDetails="CA"/></div>
        <div className="col-md-6 col-lg-4 col-sm-6 col-*-12 col-card" ><Card reqCount="500+" reqDetails="Lawyers"/></div>
        <div className="col-md-6 col-lg-4 col-sm-6 col-*-12 col-card" ><Card reqCount="100+" reqDetails="Doctors"/></div>
        <div className="col-md-6 col-lg-4 col-sm-6 col-*-12 col-card" ><Card reqCount="100+" reqDetails="Doctors"/></div>
      </div>
    </div>
  )
}

export default DetailCard