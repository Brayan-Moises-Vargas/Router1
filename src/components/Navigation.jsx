import React from "react";
import { Link } from "react-router-dom";
import { Container, Navbar } from "react-bootstrap";

const Navigation = () => {
  return (
    
    <Navbar
     bg="danger"
     variant="dark"
    >
    <Container className="justify-content-center">
     <Link to="/" className="text-white ms-2 py-3 text-decoration-none"> 🏘️ Home </Link>
     <Link to="/Contact" className="text-white ms-3 text-decoration-none"> 📒Contacto </Link> 
    </Container>
    <Navbar.Brand>Hapyy Cake 🧁</Navbar.Brand>
    </Navbar>
    
  );
};

export default Navigation;