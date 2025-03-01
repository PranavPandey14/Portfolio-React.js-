
import React from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';
import { Container, Row, Col } from 'react-bootstrap';
import { FaCode } from "react-icons/fa6";
import Styles from '../styles/Topbar.module.css'

const Topbar = () => {
    return (
        <div className="bg-dark text-white py-2 sticky-top">
            <Container>
                <Row className="align-items-center ">
                    {/* Left section of the Topbar with Name */}
                    <Col xs={12} sm={6} md={4}>
                    <Link to="herosection" smooth={true}  offset={-50} duration={500}><span className={`fs-3 fw-bold ${Styles.topbarItems}`}>Pranav Pandey</span></Link><FaCode className='mx-2' color='#008080' size={30} />
                    </Col>

                    {/* Right section of the Topbar with Navigation Links */}
                    <Col xs={12} sm={6} md={8} className="text-end d-none d-md-block ">
                        <ul className={`list-unstyled d-flex m-0 justify-content-end fw-bold ${Styles.topbarItems}`}>
                            <li className="mx-3">
                                <Link to="herosection" smooth={true}  offset={-50} duration={500}>Home</Link>
                            </li>
                            <li className="mx-3">
                                <Link to="about" smooth={true}  offset={-50} duration={500}>About</Link>
                            </li>
                            <li className="mx-3">
                                <Link to="projects" smooth={true}  offset={-50} duration={500}>Projects</Link>
                            </li>
                            <li className="mx-3">
                                <Link to="contact" smooth={true}  offset={-50} duration={500}>Contact</Link>
                            </li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Topbar;
