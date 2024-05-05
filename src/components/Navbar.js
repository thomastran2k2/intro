import { Link } from "react-router-dom";
const Navbar = () => {
    return (
      <>
        <nav className='nav'>
          <a href="/intro" className='site-title'>Thomas Personal Page</a>
          <ul>
              <li> 
              
              <Link to="/contact">Contact</Link>
              </li>
              <li>
              <Link to="/project">Project</Link>
              </li>
             
          </ul>
        </nav>
      </>
    );
  };
  
  export default Navbar;