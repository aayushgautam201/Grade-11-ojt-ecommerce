import React, { useEffect, useState } from "react";
import Header from "../component/header";
import Footer from "../component/footer";
import axios from "axios";
import {Link} from 'react-router-dom';
import Aboutu from '../../static/image/aboutu.jpg';
const Blog=()=>
{
  return(
    <>
    <Header/>
    <Blog_page/>
  <Footer/>
  </>
  )
}
const Blog_page = ()=>{
    const [Blog,setBlog] = useState([]);

    useEffect(()=>{
        axios.get(`http://192.168.1.67:8000/blogs/name/`)
        .then((res)=>{
            console.log(res.data);
            setBlog(res.data);
        })
        .catch((err)=>{
            console.log(err);
        })
    },[])
    return(
<div className="container-fluid">
<br/>
<br/>
<br/>
<br/>
<br/>
{ Blog.map(dats=>(
	<div className="row fh5co-post-entry">
		  <Link to={`/blog/detail_page/${dats.id}`} classNameName="text-decoration-none">
			<article className="col-lg-3 col-md-3 col-sm-3 col-xs-6 col-xxs-12 animate-box">
				<figure>
					<img src={dats.photo} alt="Image" className="img-responsive"/>
				</figure>
				<span className="fh5co-meta"><a href="single.html">{dats.blog_category}</a></span>
				<h2 className="fh5co-article-title"><a href="single.html">{dats.title}</a></h2>
				<span className="fh5co-meta fh5co-date">{dats.created_on}</span>
			</article>
		</Link>
	</div>
))
}
</div>
    )
}
export default Blog;