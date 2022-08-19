import React from 'react'
import { Link } from 'react-router-dom'
import './nav.css'
import HomeIcon from '@mui/icons-material/Home';
import { Phone } from '@mui/icons-material';

const Nav = () => {
    return (
        <>
            <div className='container-fluid'>
                <div className='row bg-dark py-1'>
                    <div className='col-md-3 text-center'>
                        <Link className="navbar-brand fs-3 text-white" to="/">Store</Link>
                    </div>
                    <div className='col-md-7'>
                        <form className="d-flex">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-success" type="submit">Search</button>
                        </form>
                    </div>
                    <div className='col-md-2 d-flex justify-content-evenly'>
                        <Link to='/signin' className='text-white fs-3'><i class="bi bi-box-arrow-in-right"></i></Link>
                        <Link to='/signup' className='text-white fs-3'><i class="bi bi-person-plus"></i></Link>
                        <Link to='/cart' className='text-white fs-3'><i class="bi bi-cart"></i></Link>
                    </div>
                </div>
            </div>
            <nav className="navbar navbar-expand-lg navbar-light custom-background">
                <div className="container-fluid">

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 d-flex 
                        justify-content-evenly w-100 fs-5">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to="/">
                                   <HomeIcon color='primary' />
                                   Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/products">Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About us</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/blogs">Blogs</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link" to="/contact"> <Phone /> Contact</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>
        </>
    )
}

export default Nav