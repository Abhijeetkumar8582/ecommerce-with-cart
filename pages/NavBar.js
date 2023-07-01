import Link from 'next/link'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useRouter } from 'next/router'

function NavBar() {

  const router = useRouter()
  const dataCheck = useSelector(state => state.AddCart.list)
  const redirect = (category) => {
    router.push({
      pathname: '/Home',
      query: { category }
    })
  }
  const viewCart = () => {
    router.push({
      pathname: 'Collections/ViewCart',
      // query: { category }?
    })
  }
  return (
    <>
      <nav className="navbar fixed-top navbar-expand-lg bg-light">
        <div className="container-fluid">
          <Link className="navbar-brand " href="/"  >Navbar</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active  mx-3" aria-current="page" href="#" onClick={() => redirect('electronics')}>Electronics</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-3" href="#" onClick={() => redirect('jewelery')}>Jewelery</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-3" href="#" onClick={() => redirect("men's clothing")}>Men's clothing</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-3" href="#" onClick={() => redirect("women's clothing")}>Women's clothing</Link>
              </li>
            </ul>
            <Link  href="Collections/ViewCart"> <button onClick={viewCart} style={{ border: 'none' }}>🛒{dataCheck.length}</button></Link>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavBar