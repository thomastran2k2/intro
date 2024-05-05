const Navbar = () => {
    return (
      <>
        <nav className='nav'>
          <a href="/" className='site-title'>Thomas Personal Page</a>
          <ul>
              <li>
              
              <a href="/contact">Contact</a>
              </li>
              <li>
                <a href="/project">Project</a>
              </li>
             
          </ul>
        </nav>
      </>
    );
  };
  
  export default Navbar;