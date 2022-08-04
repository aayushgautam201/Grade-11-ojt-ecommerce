import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../component/footer';
import Header from '../component/header';
import Watch1 from '../../static/image/watch1.png';
import axios from 'axios';




const Detail = ()=>{
    return(
        <>
        <Header/>
        <Detail_page/>
        <Footer/>
        </>
    )
}

const Detail_page =()=>{
    const slug = useParams();
    const Newslug = slug['id'];

    const [Detailpage, setDetailpage] = useState([]);

    useEffect(()=>
    {
        axios.get(`http://localhost:8000/ecommerce/product/${Newslug}/`)
    .then((res)=>{
        console.log(res.data);
        setDetailpage(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
    },[])

    console.log(slug);
    return(
        <>
        <br/>
        <br/>
        <br/>
          <div className="bib">
         <div className="flo">
             <div className="flo">
                 <div className="mol">
                     <div className="glider">
                        <div className="dreview">
                            <img src={Detailpage.product_image} id="imagebox" alt=""/>

                          </div>
                            <div className="sroduct">
                             <img src={Detailpage.product_image} alt="" onclick="clickme(this)"/>
                             <img src={Detailpage.product_image} alt="" onclick="clickme(this)"/>
                             <img src={Detailpage.product_image} alt="" onclick="clickme(this)"/>
                             <img src={Detailpage.product_image} alt="" onclick="clickme(this)"/>
                             </div>
                             
                        </div>
                    </div>
                    <div className="mol">
                       <div className="content">
                         <h2>{Detailpage.product_name}</h2>
                         <p className="grice">Price:${Detailpage.product_price}</p>
                         <p>colour:<select name="color">
                            <option value="red">Red</option>
                            <option value="Black">Black</option>
                            <option value="white">white</option>
                            <option value="gray">gray</option>
                         </select></p>
                         <p>Quantity:<input type="text" value="1"/></p>
                         <a href="/Buy_now" className="btn">Buy Through insta</a>
                     </div>
                 </div>
             </div>
         </div>
     </div>
     <div>
         <p>{Detailpage.product_description}</p>
     </div>
        </>
    )
}
export default Detail;