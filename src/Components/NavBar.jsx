import React, { useState } from 'react'
import { Container, Nav, Navbar, NavDropdown, Offcanvas } from 'react-bootstrap'

const NavBar = () => {
    let expand = 'lg'
    let [show, setshow] = useState(false)
    return (
        <div className='text-white min-h-[10vh] sticky top-0 z-20 bg-black ' >
            <Navbar key={expand} expand={expand} className=" mb-3">
                <Container >
                    <Navbar.Brand href="#" className='txtclr' >
                        <h6 className='txtclr text-lg ' > </h6>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`}
                        onClick={() => setshow(true)} className='bg-white ' />
                    <Navbar.Offcanvas className='bg-black '
                        id={`offcanvasNavbar-expand-${expand}`}
                        aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                        placement="end"
                        show={show}  // Control visibility with state
                        onHide={() => setshow(false)}  // Close the offcanvas
                    >
                        <Offcanvas.Header className='text-white  '>
                            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                                Offcanvas
                            </Offcanvas.Title>
                            <button type="button" onClick={() => setshow(false)} className="btn-close btn-close-white" aria-label="Close"></button>

                        </Offcanvas.Header>
                        <Offcanvas.Body>
                            <div className='lg:w-[60%] ms-auto ' >

                                <Nav className="justify-content-around poppins text-white flex-grow-1 pe-3">
                                    <Nav.Link href="#home" onClick={() => setshow(false)} className='text-white ' >Home</Nav.Link>
                                    <Nav.Link href="#about" onClick={() => setshow(false)} className='text-white ' >About</Nav.Link>

                                    <Nav.Link href="#service " onClick={() => setshow(false)} className='text-white ' >Service</Nav.Link>
                                    <Nav.Link href="#experience " onClick={() => setshow(false)} className='text-white ' >Experience </Nav.Link>
                                    <Nav.Link href="#project " onClick={() => setshow(false)} className='text-white ' >Projects  </Nav.Link>

                                    <Nav.Link href="#skill " onClick={() => setshow(false)} className='text-white ' >Skills </Nav.Link>
                                    <Nav.Link href="#contact " onClick={() => setshow(false)} className='text-white ' >Contact</Nav.Link>


                                </Nav>
                            </div>
                        </Offcanvas.Body>
                    </Navbar.Offcanvas>
                </Container>
            </Navbar>

        </div>
    )
}

export default NavBar