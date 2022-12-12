import React from 'react'
import Menu from '../homeOneComponents/Menu'
import Form from './Form'
import SearchEntry from './SearchEntry'

function Home1() {
  return (
    <div className='container-fluid'>
        <div className='row'>
            <div className='col-xl-2 col-lg-3 col-md-4' style={{height:"100vh", backgroundColor: '#00A652'}}>
            <Menu />
            </div>
            <div className='col-xl-10 col-lg-9 col-md-8' style={{height:"100vh", backgroundColor: '#fffcf7'}}>
            <SearchEntry />
            <Form />
            </div>
        </div>
    </div>
  )
}

export default Home1