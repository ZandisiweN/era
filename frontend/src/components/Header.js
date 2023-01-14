import React, {useEffect, useState} from "react"
import {Link} from "react-router-dom"
import Navbar from "react-bootstrap/Navbar"
import Nav from "react-bootstrap/Nav"
import NavDropdown from "react-bootstrap/NavDropdown"
import Badge from "react-bootstrap/Badge"
import Container from "react-bootstrap/Container"
import {LinkContainer} from "react-router-bootstrap"
import {useContext} from "react"
import {Store} from "../Store"
import Button from "react-bootstrap/Button"
import {toast} from "react-toastify"
import {getError} from "../utils"
import axios from "axios"
import SearchBox from "./SearchBox"

const Header = () => {
  const {state, dispatch: ctxDispatch} = useContext(Store)
  const {cart, userInfo} = state

  const signoutHandler = () => {
    ctxDispatch({type: "USER_SIGNOUT"})
    localStorage.removeItem("userInfo")
    localStorage.removeItem("shippingAddress")
    localStorage.removeItem("paymentMethod")
    window.location.href = "/signin"
  }

  const [sidebarIsOpen, setSidebarIsOpen] = useState(false)
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const {data} = await axios.get(`/api/products/categories`)
        setCategories(data)
      } catch (err) {
        toast.error(getError(err))
      }
    }
    fetchCategories()
  }, [])
  return (
    <>
      <nav className='navbar bg-body-tertiary side-bar-wrapper'>
        <div className='container-xl'>
          <button className='navbar-toggler' type='button' data-bs-toggle='offcanvas' data-bs-target='#offcanvasNavbar' aria-controls='offcanvasNavbar'>
            <span className='navbar-toggler-icon'></span>
          </button>
          <Link className='navbar-brand mx-3 fw-bold fs-3' to='/'>
            E R A
          </Link>
          <div className='d-flex justify-content-between justify-self-end'>
            <Link to='/cart' className='nav-link mx-3 fw-normal fs-5'>
              Cart
              {cart.cartItems.length > 0 && (
                <Badge pill bg='danger'>
                  {cart.cartItems.reduce((a, c) => a + c.quantity, 0)}
                </Badge>
              )}
            </Link>
            {userInfo ? (
              <NavDropdown title={userInfo.name} id='basic-nav-dropdown' className="mx-3 fw-normal fs-5">
                <LinkContainer to='/profile'>
                  <NavDropdown.Item>User Profile</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/orderhistory'>
                  <NavDropdown.Item>Order History</NavDropdown.Item>
                </LinkContainer>
                <NavDropdown.Divider />
                <Link className='dropdown-item' to='#signout' onClick={signoutHandler}>
                  Sign Out
                </Link>
              </NavDropdown>
            ) : (
              <Link className='nav-link mx-3 fw-semibold fs-5' to='/signin'>
                Sign In
              </Link>
            )}
            {userInfo && userInfo.isAdmin && (
              <NavDropdown title='Admin' id='admin-nav-dropdown' className="mx-3 fw-normal fs-5">
                <LinkContainer to='/admin/dashboard'>
                  <NavDropdown.Item>Dashboard</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/products'>
                  <NavDropdown.Item>Products</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/orders'>
                  <NavDropdown.Item>Orders</NavDropdown.Item>
                </LinkContainer>
                <LinkContainer to='/admin/users'>
                  <NavDropdown.Item>Users</NavDropdown.Item>
                </LinkContainer>
              </NavDropdown>
            )}
          </div>
          <div className='offcanvas offcanvas-start' tabindex='-1' id='offcanvasNavbar' aria-labelledby='offcanvasNavbarLabel'>
            <div className='offcanvas-header'>
              <h5 className='offcanvas-title fw-bold fs-3' id='offcanvasNavbarLabel'>
                E R A
              </h5>
              <button type='button' className='btn-close' data-bs-dismiss='offcanvas' aria-label='Close'></button>
            </div>
            <div className='offcanvas-body'>
              <ul className='navbar-nav justify-content-end flex-grow-1 pe-3'>
                {categories &&
                  categories.length > 0 &&
                  categories.map((category) => (
                    <li className='nav-item' key={category}>
                      <Link className='nav-link' to={`/search?category=${category}`}>
                        {category}
                      </Link>
                    </li>
                  ))}
              </ul>
              <form className='d-flex mt-3' role='search'>
                <input className='form-control me-2' type='search' placeholder='Search' aria-label='Search' />
                <button className='btn btn-outline-dark' type='submit'>
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header
