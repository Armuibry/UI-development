import React from 'react'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';function Menu() {
  return (
    <div className='container-fluid'>
        <div className='row' style={{borderBottom:"2px solid white", justifyContent:"center" , alignItems:"center"}}>
            <div className='col-lg-3 col-md-3 col-sm-4'  style={{margin:"0",padding:"0",}}>
                <img src="/images/logo.png" className='img-fluid' alt="Logo" style={{height:"100px",objectFit:"contain"}}/>
            </div>
            <div className='col-lg-7 col-md-7 col-sm-6' style={{marginLeft:"10px",padding:"0"}}>
                <img src="/images/textlogo.jpeg" className='img-fluid w-100' alt="Logo" style={{height:"25px"}}/>
            </div>
        </div>
        <div className='row' style={{borderBottom:"2px solid white",paddingTop:"1rem", paddingBottom:"1rem"}}>
          <div className='col-lg-3 col-md-3 col-sm-3' style={{heigth:"50px",width:"50px",borderRadius:"50px",backgroundColor:"#b3ffb3"}}>
          
          </div>
          <div className='col-lg-9 col-md-9 col-sm-12'>
            <div className="row" style={{padding:"0px"}}>
              <div className='col-lg-12'><span style={{fontSize:"16px"}}>Md Amir Sohail</span></div>
              <div className='col-lg-12'><span>Student</span></div>
            </div>
          </div>
        </div>
        <div className='row' style={{marginTop:"2rem",marginBottom:"2rem",cursor:"pointer"}}>
          <div className='col-lg-2 col-md-2 col-sm-6'>
          <HomeOutlinedIcon style={{height:"30px",width:"30px", marginTop:"-10px"}}/>
          </div>
          <div className='col-lg-10 col-md-10 com-sm-6'><span>Dashboard</span></div>
        </div>
        <div className='row' style={{marginTop:"2rem",marginBottom:"2rem",cursor:"pointer"}}>
          <div className='col-lg-2 col-md-2 '></div>
          <div className='col-lg-10 col-md-10 '><span>Approvals</span></div>
        </div>
        <div className='row' style={{marginTop:"2rem",marginBottom:"2rem",cursor:"pointer"}}>
          <div className='col-lg-2 col-md-2 '></div>
          <div className='col-lg-10 col-md-10 '><span>Contact Us</span></div>
        </div>
        <div className='row' style={{marginTop:"2rem",marginBottom:"2rem",cursor:"pointer"}}>
          <div className='col-lg-2 col-md-2 '></div>
          <div className='col-lg-10 col-md-10'><span>Members</span></div>
        </div>
    </div>
  )
}

export default Menu