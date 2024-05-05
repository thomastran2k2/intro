const Navbar = () => {
    return (
      <>
        <nav className='nav'>
          <a href="/intro" className='site-title'>Thomas Personal Page</a>
          <ul>
              <li>
              
              <a href="/intro/contact">Contact</a>
              </li>
              <li>
                <a href="/intro/project">Project</a>
              </li>
             
          </ul>
        </nav>
      </>
    );
  };
  
  export default Navbar;