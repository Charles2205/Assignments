import { Link } from "react-router-dom"
const NavBar = ()=>{
    return (
       <>
         
        
        <nav>
      <div className="logo">
        <img src='../public/logo.svg' alt="Logo" />
      </div>

      <ul>
        <li>
          <Link to={"#home"}>Home</Link>
        </li>
        <li>
          <Link to={"#about"}>About</Link>
        </li>
        <li>
          <Link to={"#contact"}>Contact</Link>
        </li>
        <li>
          <Link to={"#blog"}>Blog</Link>
        </li>
        <li>
          <Link to={"#carees"}>Careers</Link>
        </li>
      </ul>
      <button className="button">Request Invite</button>
        </nav>
  
        
        </>
    )
}

export default NavBar