'use client'

import React from 'react'
import { Input, User, Spacer } from '@nextui-org/react';
import "./Landing.css"
import { Link } from "react-router-dom"

export default function Landing() {
  return (
    <div className='landing-page'>
      Welcome to Landing page
      <div className='input-field'>
        <Input placeholder="Next UI" />
        <User
            className='user-profile'
            src="https://i.pravatar.cc/150?u=a042581f4e29026704d"
            color='primary'
            name="Ariana Wattson"
            size="xl"
        />
      <Spacer />
      <Link to="#">
        "First solve the problem. Then, write the code." - Jon Johnson.
        (Primary)
      </Link>
      <Spacer />
      <Link to="/Login">
        Login
        (Secondary)
      </Link>
      <Spacer />
      <Link to="/Signup">
        Signup
        (Success)
      </Link>
      <Spacer />
      <Link to="#">
        "First solve the problem. Then, write the code." - Jon Johnson.
        (Warning)
      </Link>
      <Spacer />
      <Link to="#">
        "First solve the problem. Then, write the code." - Jon Johnson. (Error)
      </Link>
      </div>
    </div>
  )
}