import React from 'react'
import './Search.css'

function Search() {
  return (
    <div className='container-fluid'>
        <div className="row row-head">
            <div className="col-md-12">
                <div className="head">Dashboard</div>
            </div>
        </div>
        <div className="row">
            <div className="col-md-3 col-head">
                <input type="text" placeholder='Batch No.'/>
            </div>
            <div className="col-md-3 col-head">
                <input type="text" placeholder='Name'/>
            </div>
            <div className="col-md-3 col-head">
                <input type="text" placeholder='Designation'/>
            </div>
            <div className="col-md-3">
                <button className='btn-search'>Search</button>
            </div>
        </div>
    </div>
  )
}

export default Search