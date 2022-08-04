import React from "react";
import {Route,BrowserRouter,Switch} from "react-router-dom";
import Home from "../templates/pages/homepage";
import About from "../templates/pages/aboutus";
import Detail from "../templates/pages/detailpage";
import Blog from "../templates/pages/blogpage";
import Blogs from "../templates/pages/blogdetailpage";
import Popular from "../templates/pages/popular";
import PDetail from "../templates/pages/populardetail";
import Collection from "../templates/pages/collection";
import CDetail from "../templates/pages/collectiondetail";
import Contacts from "../templates/pages/contactus";

const Router =()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
            {/* <Route path='/homepage' exact component={Home}/> */}
            <Route path='/Blogpage' exact component={Blog}/> 
            {/* <Route path='/:slug' exact component={Detail}/> */}
            <Route path='/about_us' exact component={About}/>
            <Route path='/popular_page' exact component={Popular}/>
            <Route path='/detail/:id' exact component={Detail}/>
            <Route path='/Pdetail/:id' exact component={PDetail}/>
            <Route path='/blog/detail_page/:id' exact component={Blogs}/>
            <Route path='/collection_page' exact component={Collection}/>
            <Route path='/Cdetail/:id' exact component={CDetail}/>
            <Route path='/contact_us' exact component={Contacts}/>
            

            </Switch>

        </BrowserRouter>
    )
}
export default Router;