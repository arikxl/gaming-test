import React from 'react'
import { Link } from 'react-router-dom'
import RandomGame from './RandomGame'

const Header = () => {





  return (
    <header>

    <RandomGame />

      <Link to={'/'}>
        <h1>XL<span>g</span>amin<span>g</span>4Free</h1>
      </Link>


      <p>About Me</p>

    </header>
  )
}

export default Header