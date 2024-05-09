import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid">
  <Link class="navbar-brand" to="/admin">Admin Page</Link>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <li class="nav-item">
        <Link class="navbar-brand" to="/">Home</Link>
        </li>
        <li class="nav-item">
          <Link class="navbar-brand" to="/admin/products">Products</Link>
        </li>
        <li class="nav-item">
          <Link class="navbar-brand" to="/admin/add">Add</Link>
        </li>
        <li class="nav-item dropdown">
          <Link to='/products' class="nav-link dropdown-toggle" role="button" data-bs-toggle="dropdown" aria-expanded="false" >
            Dropdown
          </Link>
          <ul class="dropdown-menu">
            <li><a class="dropdown-item" href="#">All Products</a></li>
            <li><a class="dropdown-item" href="#">Popular Items</a></li>
            <li><a class="dropdown-item" href="#">New Arrivals</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div>
</nav>
  )
}

export default Header