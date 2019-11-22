import React from 'react'
import { Link } from 'react-router-dom'
import { Head, Img, Links } from './styles'
import logo from '../../assets/img/logo.png'

function Header() {
  return (
    <Head>
      <Link to='/'>
        <Img src={logo} alt='logo' />
      </Link>
      <Links>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </Links>
    </Head>
  )
}

export default Header