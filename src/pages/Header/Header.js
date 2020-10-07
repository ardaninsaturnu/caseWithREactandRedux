import React from 'react';
import './Header.css';
import logo from '../../logohepsiburada.png';
import {Navbar} from "react-bootstrap";



export default function Header() {
    return (



    <Navbar className="container">
        <Navbar.Brand href="#home"><img src={logo} className="logo"></img></Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
                <p className="headerText">Link Vote Challenge</p>
            </Navbar.Text>
        </Navbar.Collapse>
    </Navbar>

    )
}




