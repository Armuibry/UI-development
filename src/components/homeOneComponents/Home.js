import React from 'react'
import DetailCard from './DetailCard'
import Menu from './Menu'
import Search from './Search'

function home() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-xl-2 col-lg-3 col-md-4' style={{height:"100vh", backgroundColor: '#00A652'}}>
            <Menu />
            </div>
            <div className='col-xl-10 col-lg-9 col-md-8' style={{height:"100vh", backgroundColor: '#fffcf7'}}>
            <Search />
            <DetailCard />
            </div>
        </div>
    </div>
  )
}

export default home