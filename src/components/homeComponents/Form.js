import React from 'react'
import './Form.css'
import data from '../../data.js'

function Form() {
    return (
        <div className='container-fluid'>
            <table className="table table-sm">
                <thead>
                    <tr col="row">
                        <th scope="col">Name</th>
                        <th scope="col">Batch No</th>
                        <th scope="col">Location</th>
                        <th scope="col">Experience</th>
                        <th scope="col">Contact No.</th>
                    </tr>
                </thead>
                <tbody>
                {data.map((user,index )=> <tr key={index}>
                <td>{user.name}</td>
                <td>{user.batch}</td>
                <td>{user.location}</td>
                <td>{user.experience}</td>
                <td>{user.contact}</td>
            </tr>)}
                    
                </tbody>
            </table>
        </div>
    )
}

export default Form