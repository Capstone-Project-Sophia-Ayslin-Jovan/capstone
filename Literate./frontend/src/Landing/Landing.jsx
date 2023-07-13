'use client'

import React from 'react'
import { Link, Input, User, Spacer } from '@nextui-org/react';
import "./Landing.css"


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
      <Link color href="#">
        "First solve the problem. Then, write the code." - Jon Johnson.
        (Primary)
      </Link>
      <Spacer />
      <Link color="secondary" href="#">
        "First solve the problem. Then, write the code." - Jon Johnson.
        (Secondary)
      </Link>
      <Spacer />
      <Link color="success" href="#">
        "First solve the problem. Then, write the code." - Jon Johnson.
        (Success)
      </Link>
      <Spacer />
      <Link color="warning" href="#">
        "First solve the problem. Then, write the code." - Jon Johnson.
        (Warning)
      </Link>
      <Spacer />
      <Link color="error" href="#">
        "First solve the problem. Then, write the code." - Jon Johnson. (Error)
      </Link>
      </div>
    </div>
  )
}