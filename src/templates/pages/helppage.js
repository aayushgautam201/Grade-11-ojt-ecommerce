import React from "react";
import Header from '../component/header';
import Footer from '../component/footer';
import { useParams } from "react-router";
const Help=()=>{
    return(
<>
<Header/>
<Help_page/>
<Footer/>
</>
    )
}
    const Help_page=()=>{
    const Id = useParams([]);
    console.log(Id);
    {
        return(
            <>
            <h2>This is Help_page</h2>
            </>
    
        )
    }
}
export default Help;