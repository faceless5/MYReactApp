import React from 'react'
import Footer from '../components/Layout/Footer'
import Nav from '../components/Layout/Nav'

const Cart = () => {
    return (
        <>
            <Nav />
            <h2 className='text-center mt-3 mb-1'>Cart Items</h2>
            <table className="table w-75 mx-auto table-hover table-striped text-center">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Product Image</th>
                        <th>Product Details</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td>1</td>
                            <td><img src='./product_img/image1.jpg' alt="image of a phone"
                             style={{"height":"200px"}} /></td>
                            <td>
                                <h3>Samsung Mobile</h3>
                                <h4>Rs. 15,000</h4>
                                <h5>5" display, octa core processor, 6gb ram, 64gb storage</h5>
                            </td>
                            <td>
                                <button className='btn  btn-warning'>Update</button>
                                <button className='btn  btn-danger'>Remove</button>
                            </td>
                        </tr>

                        <tr>
                            <td>2</td>
                            <td><img src='./product_img/image1.jpg' alt="image of a phone"
                             style={{"height":"200px"}}/></td>
                            <td>
                                <h3>Samsung Mobile</h3>
                                <h4>Rs. 15,000</h4>
                                <h5>5" display, octa core processor, 6gb ram, 64gb storage</h5>
                            </td>
                            <td>
                                <button className='btn btn-warning'>Update</button>
                                <button className='btn btn-danger'>Remove</button>
                            </td>
                        </tr>

                        <tr>
                            <td>3</td>
                            <td><img src='./product_img/image1.jpg' alt="image of a phone"
                             style={{"height":"200px"}}/></td>
                            <td>
                                <h3>Samsung Mobile</h3>
                                <h4>Rs. 15,000</h4>
                                <h5>5" display, octa core processor, 6gb ram, 64gb storage</h5>
                            </td>
                            <td className='d-flex'>
                                <button className='btn  btn-warning'>Update</button>
                                <button className='btn btn-danger'>Remove</button>
                            </td>
                        </tr>

                        <tr>
                            <td>4</td>
                            <td><img src='./product_img/image1.jpg' alt="image of a phone"
                             style={{"height":"200px"}}/></td>
                            <td>
                                <h3>Samsung Mobile</h3>
                                <h4>Rs. 15,000</h4>
                                <h5>5" display, octa core processor, 6gb ram, 64gb storage</h5>
                            </td>
                            <td>
                                <button className='btn btn-warning'>Update</button>
                                <button className='btn btn-danger'>Remove</button>
                            </td>
                        </tr>
                       

                </tbody>

            </table>
            

            <Footer />

        </>
    )
}

export default Cart