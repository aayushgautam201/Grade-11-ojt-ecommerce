import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import Footer from '../component/footer';
import Header from '../component/header';
import axios from 'axios';





const CDetail = ()=>{
    return(
        <>
        <Header/>
        <Cdetail_page/>
        <Footer/>
        </>
    )
}

const Cdetail_page =()=>{
    const Id= useParams();
    const Myid = Id['id'];

    const [Detailpage, setDetailpage] = useState([]);
    console.log(Detailpage)

    useEffect(()=>
    {
        axios.get(`http://localhost:8000/ecommerce/specialselection/${Myid}/`)
    .then((res)=>{
        console.log(res.data);
        setDetailpage(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
    },[])

    console.log(Id);
    return(
        <>
          <div className="bib">
          <br/>
          <br/>
          <br/>
         <div className="flo">
             <div className="flo">
                 <div className="mol">
                     <div className="glider">
                        <div className="dreview">
                            <img src={Detailpage.image} id="imagebox" alt=""/>

                          </div>
                            <div className="sroduct">
                             <img src={Detailpage.image} alt="" onclick="clickme(this)"/>
                             <img src={Detailpage.image} alt="" onclick="clickme(this)"/>
                             <img src={Detailpage.image} alt="" onclick="clickme(this)"/>
                             <img src={Detailpage.image} alt="" onclick="clickme(this)"/>
                             </div>
                             
                        </div>
                    </div>
                    <div className="mol">
                       <div className="content">
                         <h2>{Detailpage.name}</h2>
                         <p className="grice">Price:{Detailpage.price}</p>
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
        </>
    )
}
export default CDetail;