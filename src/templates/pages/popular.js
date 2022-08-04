import React,{useState,useEffect} from 'react';
import Header from '../component/header';
import Footer from '../component/footer';
import { Link } from 'react-router-dom';
import axios from 'axios';

const Popular= ()=>{
    return(
        <>
        <Header/>
        <Popular_page/>
        <Footer/>
        </>
    )
}
const Popular_page = ()=>{
    const [Data,setData] = useState([]);
    useEffect(()=>{
        axios.get(`http://localhost:8000/ecommerce/popularoftheyear/`)
        .then((res)=>{
            setData(res.data);
            console.log(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    return(
        <section>
        <br/>
        <br/>
        <br/>
         <div className = "collection-list mt-4 row gx-0 gy-3">
                   { Data.map(dats=>(
                    <div className = "col-md-6 col-lg-4 col-xl-3 p-2 best">
                       <>
                        <div className = "collection-img position-relative">
                                <Link to={`/Pdetail/${dats.id}`} className="text-decoration-none">
                            <img src = {dats.image} className = "w-100"/>
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
                            <span className = "fw-bold">Price:${dats.price}</span>
                            </div>
                            
                            </Link>
                            </div>
                            </>
                            </div>
                            ))
                            }
                    </div>
</section>
    )
}
export default Popular;


