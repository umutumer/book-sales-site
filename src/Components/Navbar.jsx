import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
         <nav className='flex fixed w-full h-24 bg-black bg-opacity-30 justify-between items-center z-50'>
          <div className="text-white ml-3 text-2xl font-semibold">LOGO</div>
          <ul className='flex text-white font-normal text-xl'>
            <li className='mr-3'>
              <Link to="/">Ana Sayfa</Link>
            </li>
            <li className='mr-3'>
              <Link to="/about">Hakkında</Link>
            </li>
            <li className='mr-3'>
              <Link to="/products">Ürünler</Link>
            </li>
          </ul>
          <div>
          <Link className='mr-3 text-white w-24 bg-emerald-400 p-1 text-center rounded-lg' to="/admin">Admin</Link>
          </div>
        </nav>
  )
}

export default Navbar