import React from 'react'
import './SearchEntry.css'

function SearchEntry() {
    return (
        <div className='container-fluid container-form'>
            <div className="row">
                <div className="col-md-12">
                    <div className="head">Doctors</div>
                </div>
            </div>
            <div className="row">
                <div className="col-md-12 col-lg-6 search-input">
                   
                        <span>Show</span><input type="number" defaultValue={10} /><span>entries</span>
                    
                </div>
                <div className="col-md-12 col-lg-6 search-bar">
                    <input type="text" placeholder='Search' />
                    <button>+ Add New</button>

                </div>
            </div>
        </div>
    )
}

export default SearchEntry