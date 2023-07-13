'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { Link } from 'react-router-dom'
import React, { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Landing from '../Landing/Landing'

export default function Home() {
  return (
    <div className={styles.main}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Landing/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}
