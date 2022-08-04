import React from 'react';
import { Link } from "react-router-dom";
import S3 from '../../static/image/s3.jpg';
import S2 from '../../static/image/s2.jpg';
import S1 from '../../static/image/s1.jpg';
import Button from 'react-bootstrap/Button';
import logo from '../../static/image/Kankali.png';

const Header=()=>{
    return(
         <nav class = "navbar navbar-expand-lg navbar-light bg-white py-4 fixed-top">
        <div class = "container">
            <a class = "navbar-brand d-flex justify-content-between align-items-center order-lg-0" href = "/">
                <img src = {logo}  alt = "site icon"/>
                <span class = "text-uppercase fw-lighter ms-2">kshop</span>
            </a>

            <div class = "order-lg-2 nav-btns">
                <button type = "button" class = "btn position-relative">
                    <i class = "fa fa-shopping-cart"></i>
                    <span class = "position-absolute top-0 start-100 translate-middle badge bg-primary">5</span>
                </button>
                <button type = "button" class = "btn position-relative">
                    <i class = "fa fa-heart"></i>
                    <span class = "position-absolute top-0 start-100 translate-middle badge bg-primary">2</span>
                </button>
                <button type = "button" class = "btn position-relative">
                    <i class = "fa fa-search"></i>
                </button>
            </div>

            <button class = "navbar-toggler border-0" type = "button" data-bs-toggle = "collapse" data-bs-target = "#navMenu">
                <span class = "navbar-toggler-icon"></span>
            </button>

            <div class = "collapse navbar-collapse order-lg-1" id = "navMenu">
                <ul class = "navbar-nav mx-auto text-center">
                    <li class = "nav-item px-2 py-2">
                        <a class = "nav-link text-uppercase text-dark" href = "/">home</a>
                    </li>
                    <li class = "nav-item px-2 py-2">
                        <a class = "nav-link text-uppercase text-dark" href = "/collection_page">collection</a>
                    </li>
                    <li class = "nav-item px-2 py-2">
                        <a class = "nav-link text-uppercase text-dark" href = "/popular_page">popular</a>
                    </li>
                    {/* <li class = "nav-item px-2 py-2">
                        <a class = "nav-link text-uppercase text-dark" href = "/Blogpage">Blog</a>
                    </li> */}
                    <li class = "nav-item px-2 py-2">
                        <a class = "nav-link text-uppercase text-dark" href = "/about_us">about us</a>
                    </li>
                    <li class = "nav-item px-2 py-2 border-0">
                        <a class = "nav-link text-uppercase text-dark" href = "/contact_us">Contact Us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    )
};
export default Header;