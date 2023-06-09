import React from 'react'
import "../style/navbar.scss"
import { Link } from 'react-router-dom'

export const Navbar = () => {
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
          <img src="https://img.freepik.com/premium-vector/vector-image-books-monochrome-clip-art-isolated-transparent-background_764382-2218.jpg" alt="logo.png" />
        </div>
        <div className="links">
          <Link className='link' to='/?cat=art'>
            <h6>Art</h6>
          </Link>
          <Link className='link' to='/?cat=books'>
            <h6>Books</h6>
          </Link>
          <Link className='link' to='/?cat=science'>
            <h6>Science</h6>
          </Link>
          <Link className='link' to='/?cat=technology'>
            <h6>Technology</h6>
          </Link>
          <Link className='link' to='/?cat=cinema'>
            <h6>Cinema</h6>
          </Link>
          <Link className='link' to='/?cat=food'>
            <h6>Food</h6>
          </Link>
          <span>Suraiya</span>
          <span>Logout</span>
          <span className='write'>
            <Link to="/write" className='link'>
              Write
            </Link>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Navbar