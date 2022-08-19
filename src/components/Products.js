import React from 'react'
import './product.css'

const Products = () => {
    return (
        <>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 m-3 g-4">
                <div className="col">
                    <div className="card shadow-lg">
                        <div className='img-div'>
                            <img src="./product_img/image1.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <button className='btn btn-success'>View Details</button>

                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-lg">
                        <div className='img-div'>
                            <img src="./product_img/image2.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <button className='btn btn-success'>View Details</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-lg">
                        <div className='img-div'>
                            <img src="./product_img/image3.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <button className='btn btn-success'>View Details</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-lg">
                        <div className='img-div'>
                            <img src="./product_img/image1.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <button className='btn btn-success'>View Details</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-lg">
                        <div className='img-div'>
                            <img src="./product_img/image2.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <button className='btn btn-success'>View Details</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-lg">
                        <div className='img-div'>
                            <img src="./product_img/image3.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <button className='btn btn-success'>View Details</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-lg">
                        <div className='img-div'>
                            <img src="./product_img/image1.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <button className='btn btn-success'>View Details</button>
                        </div>
                    </div>
                </div>
                <div className="col">
                    <div className="card shadow-lg">
                        <div className='img-div'>
                            <img src="./product_img/image2.jpg" className="card-img-top" alt="..." />
                        </div>
                        <div className="card-body text-center">
                            <h5 className="card-title">Card title</h5>
                            <button className='btn btn-success'>View Details</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Products