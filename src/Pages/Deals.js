import React from 'react'
import Nav from '../components/Layout/Nav'
import Products from '../components/Products'
import Footer from '../components/Layout/Footer'

const Deals = () => {
    return (
        <>
            <Nav />
            <h3>
                Deals Page
            </h3>
            {/*   <div className='container-fluid'>  */}
            <div className='row m-0'>
                <div className='col-md-3 p-3'>
                    <h4>Categories</h4>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlfor="flexCheckDefault">
                            Laptops and Computers
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlfor="flexCheckDefault">
                            Mobiles and Smartphones
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlfor="flexCheckDefault">
                            Beauty and fitness
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlfor="flexCheckDefault">
                            Home Appliances
                        </label>
                    </div>
                    <div className="form-check">
                        <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                        <label className="form-check-label" htmlfor="flexCheckDefault">
                            Accesories
                        </label>
                    </div>
                </div>
                <div className='col-md-9'>
                    <Products />
                </div>
                {/* </div>  */}
            </div>
            <Footer />
        </>
    )
}

export default Deals