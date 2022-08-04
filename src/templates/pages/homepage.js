import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Header from '../component/header';
import Footer from "../component/footer";
import Aboutu from '../../static/image/aboutu.jpg';
import watch3 from '../../static/image/watch3.png';
import watch4 from '../../static/image/watch4.png';
import logo from '../../static/image/Kankali.png';
const Home=()=>{
    return(
        <>
        <Header/>
        <Home_page/>
        <Footer/>
        </>
    )
}
const Home_page = ()=>{
    const [Data, setData] = useState([]);

    useEffect(()=>{
        axios.get(`http://localhost:8000/ecommerce/product/`)
    .then((res)=>{
        console.log(res.data);
        setData(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
    },[])
    return (
        <>
        
            <header id = "header" className = "vh-100 carousel slide" data-bs-ride = "carousel" style = {{paddingTop: '104px'}}>
        <div className = "container h-100 d-flex align-items-center carousel-inner">
            <Link to={`/detail/${Data.id}`} className="text-decoration-none">
            <div className = "text-center carousel-item active">
                <h2 className = "text-capitalize text-white">best collection</h2>
                <h1 className = "text-uppercase py-2 fw-bold text-white">Welcome, Kshop</h1>
                <a href = "#" className = "btn mt-3 text-uppercase">shop now</a>
            </div>
            <div className = "text-center carousel-item">
                <h2 className = "text-capitalize text-white">best price & offer</h2>
                <h1 className = "text-uppercase py-2 fw-bold text-white">new season</h1>
                <a href = "#" className = "btn mt-3 text-uppercase">buy now</a>
            </div>
            </Link>
        </div>
        <button className = "carousel-control-prev" type = "button" data-bs-target="#header" data-bs-slide = "prev">
            <span className = "carousel-control-prev-icon"></span>
        </button>
        <button className = "carousel-control-next" type = "button" data-bs-target="#header" data-bs-slide = "next">
            <span className = "carousel-control-next-icon"></span>
        </button>
    </header>
    <section id = "collection" className = "py-5">
        <div className = "container">
            <div className = "title text-center">
                <h2 className = "position-relative d-inline-block">New Collection</h2>
            </div>

            <div className = "row g-0">
                <div className = "d-flex flex-wrap justify-content-center mt-5 filter-button-group">
                    <button type = "button" className = "btn m-2 text-dark active-filter-btn" data-filter = "*">All</button>
                    <button type = "button" className = "btn m-2 text-dark" data-filter = ".best">Best Sellers</button>
                    <button type = "button" className = "btn m-2 text-dark" data-filter = ".feat">Featured</button>
                    <button type = "button" className = "btn m-2 text-dark" data-filter = ".new">New Arrival</button>
                </div>

                <div className = "collection-list mt-4 row gx-0 gy-3">
                { Data.map(dats=>(
                    <div className = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                       <>
                        <div className = "collection-img position-relative collection">
                                <Link to={`/detail/${dats.id}`} className="text-decoration-none">
                            <img src = {dats.product_image} className = "w-100"/>
                            <span className = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                        <div className = "text-center">
                            <div className = "rating mt-3">
                                <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                <span className = "text-primary"><i className = "fas fa-star"></i></span>
                            </div>
                            <p className = "text-capitalize my-1"></p>
                            <span className = "fw-bold">{dats.product_name}</span><br/>
                            <span className = "fw-bold">Price:${dats.product_price}</span>
                            </div>
                            
                            </Link>
                            </div>
                            </>
                            </div>
                             ))
                            }
                    </div>

                  {/* <div className = "col-md-6 col-lg-4 col-xl-3 p-2 feat">
                  { Data.map(dats=>(
                      <>
                        <div className = "collection-img position-relative">
                            <img src = {dats.product_image} className = "w-100"/>
                            <span className = "position-absolute bg-primary text-white d-flex align-items-center justify-content-center">sale</span>
                        </div>
                        <div className = "text-center">
                            <div className = "rating mt-3">
                                <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                <span className = "text-primary"><i className = "fas fa-star"></i></span>
                                <span className = "text-primary"><i className = "fas fa-star"></i></span>
                            </div>
                            <p className = "text-capitalize my-1">{dats.product_name}</p>
                            <span className = "fw-bold">{dats.product_price}</span>
                        </div>
                        </>
                  ))}
                    </div> */}

                </div>
            </div>
    </section>
    {/* <section id = "about" className = "py-5">
        <div className = "container">
            <div className = "row gy-lg-5 align-items-center">
                <div className = "col-lg-6 order-lg-1 text-center text-lg-start">
                    <div className = "title pt-3 pb-5">
                        <h2 className = "position-relative d-inline-block ms-4">About Us</h2>
                    </div>
                    <p className = "lead text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis, ipsam.</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem fuga blanditiis, modi exercitationem quae quam eveniet! Minus labore voluptatibus corporis recusandae accusantium velit, nemo, nobis, nulla ullam pariatur totam quos.</p>
                </div>
                <div className = "col-lg-6 order-lg-0">
                    <img src = {Aboutu}  alt = "" className = "img-fluid"/>
                </div>
            </div>
        </div>
    </section> */}
    <section id = "newsletter" className = "py-5">
        <div className = "container">
            <div className = "d-flex flex-column align-items-center justify-content-center">
                <div className = "title text-center pt-3 pb-5">
                    <h2 className = "position-relative d-inline-block ms-4">Newsletter Subscription</h2>
                </div>

                <p className = "text-center text-muted">Subscribe with your email to get the latest updates from us</p>
                <div className = "input-group mb-3 mt-3">
                    <input type = "text" className = "form-control" placeholder="Enter Your Email ..."/>
                    <button className = "btn btn-primary" type = "submit">Subscribe</button>
                </div>
                
            </div>
        </div>
        
    </section>
    </>
    )
    }
export default Home;

    