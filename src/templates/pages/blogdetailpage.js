import React, { useEffect, useState } from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import { useParams } from "react-router";
import axios from 'axios';


const Blogs = ()=>{
    return(
        <>
        <Header/>
        <BlogDetail/>
        <Footer/>
        </>
    )
}
const BlogDetail = ()=>{
    const Id = useParams();
    const Newid = Id['id'];
    const [BlogDetailpage, setBlogDetailpage] = useState([]);

    useEffect(()=>{
        axios.get(`http://192.168.1.67:8000/blogs/name/${Newid}/`)
    .then((res)=>{
        console.log(res.data);
        setBlogDetailpage(res.data);
    })
    .catch((err)=>{
        console.log(err);
    })
    },[])

    console.log(Id);
    return(
        <>
        <div className="container-fluid">
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
        <br/>
		<div className="row fh5co-post-entry single-entry">
			<article className="col-lg-8 col-lg-offset-2 col-md-8 col-md-offset-2 col-sm-8 col-sm-offset-2 col-xs-12 col-xs-offset-0">
				<span className="fh5co-meta animate-box">{BlogDetailpage.title}</span>
				<figure className="animate-box">
					<img src={BlogDetailpage.photo} alt="Image" className="img-responsive"/>
				</figure>
				
				<div className="col-lg-12 col-lg-offset-0 col-md-12 col-md-offset-0 col-sm-12 col-sm-offset-0 col-xs-12 col-xs-offset-0 text-left content-article">
					<div className="row">
						<div className="col-lg-8 cp-r animate-box">
							<p>{BlogDetailpage.all_description} </p>
                            <p>{BlogDetailpage.description_2} </p>
						</div>
					
				</div>
                </div>
			</article>
		</div>
	</div>
    </>
    )
}
export default Blogs;