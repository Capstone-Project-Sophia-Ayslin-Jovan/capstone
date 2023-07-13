'use client'

import React from 'react'
import { Navbar, Button, Link, Text, Card, Radio, Spacer } from "@nextui-org/react";
import './NavbarContent.css'

const NavbarContent = () => {
  return (
    <div>
      <Navbar className='navbar'>
        <Navbar.Brand className='logo'>LOGO</Navbar.Brand>
        <Spacer/>
        <Spacer/>
        <Navbar.Content>
          <Navbar.Link href="/">Home</Navbar.Link>
          <Spacer/>
          <Navbar.Link>About Us</Navbar.Link>
          <Spacer/>
          <Navbar.Link>Contact</Navbar.Link>
          <Spacer/>
        </Navbar.Content>
      </Navbar>
    </div>
  )
}

export default NavbarContent

