import Articles from "./components/Articles";
import Description from "./components/Description";
import Footer from "./components/Footer";
import Landing from "./components/Landing";
import NavBar from "./components/Nav";




import { BrowserRouter, Route, Routes } from "react-router-dom";

const Layout =()=>{
    return (
        <>
       <BrowserRouter>
            <NavBar/>
                {/* <Routes>
                <Route path="/" element={<Landing/>}/>
                <Route path="/#about" element={<Description/>}/>
                <Route path="/#about" element={<Articles/>}/>
                </Routes> */}
            <Description/>
            <Articles/>
            <Footer/>
       </BrowserRouter>
        
        
        
        </>
    )
}


export default Layout