import React from 'react';
import './Card.css'
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

function Card(props) {
  return (
    <div className='container-fluid card-details'>
        <div className="icons-div">
            <PersonOutlineOutlinedIcon className='mui-icon'/>
        </div>
        <div className="details">
            <p>{props.reqCount}</p>
            <span>{props.reqDetails}</span>
        </div>
    </div>
  )
}

export default Card