'use client'

import React from 'react'
import { Navbar, Button, Link, Text, Card, Radio } from "@nextui-org/react";
import './NavbarContent.css'

const NavbarContent = () => {
  return (
    <div>
      <Navbar>
        <Navbar.Brand className='logo'>LOGO</Navbar.Brand>
        <Navbar.Content>
          <Navbar.Link>Home</Navbar.Link>
          <Navbar.Link>About Us</Navbar.Link>
          <Navbar.Link>Contact</Navbar.Link>
        </Navbar.Content>
      </Navbar>
    </div>
  )
}

export default NavbarContent

