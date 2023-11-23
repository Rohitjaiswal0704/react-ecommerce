import Menu from '@mui/material/Menu';
import React from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Badge from '@mui/material/Badge';
import { NavLink } from "react-bootstrap";
import { useState } from "react";
import image from "../image/cart.gif"
// import { useSelector } from 'react-redux';


function Header(){
  
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  
  // const getdata = useSelector((state) => state.cartreducer)

  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink to="/" className="text-decoration-none text-light mx-1" >Add to Card</NavLink>
          <Nav className="me-auto">
            <NavLink to="/" className="text-decoration-none text-light" >Home</NavLink>
          </Nav>

          <Badge className='mx-1' badgeContent={1} color="primary" 
             id="basic-button"
             aria-controls={open ? 'basic-menu' : undefined}
             aria-haspopup="true"
             aria-expanded={open ? 'true' : undefined}
             onClick={handleClick}
             >
          <i className="fa-sharp fa-solid fa-cart-shopping text-white" style={{ fontSize: 25, cursor: "pointer" }}></i>
          </Badge>

        </Container>
        <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
         <div className='card_details d-flex justify-content-center align-items-center' style={{width : "20rem",padding : 7,position : "relative"}}>
           <i className="fa-solid fa-xmark"
            onClick={handleClose}
           style={{position : "absolute", top:5, right:15, fontSize:23 ,cursor:'pointer'}}></i>
               <p style={{fontSize : 22}}>Your cards is empty</p>
               <img src={image} alt="" className='emptycart_img' style={{width : "5rem", padding:10}} />
           </div>
      </Menu>
      </Navbar>
    </>
  )
}

export default Header;
