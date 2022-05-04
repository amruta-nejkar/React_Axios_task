import * as React from 'react';


const Header = () => {

  return (
    <>

      {/* <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Ul className="container">
             <Li><Link to="">ProductList</Link></Li>
             <Li><Link to="/productdetails">ProductDetails</Link></Li>
             <Li><Link to="/drowupdown">Drowupdown</Link></Li>
             <Li><Link to="/category">Category</Link></Li>
            </Ul>
          </Toolbar>

        </Container>
      </AppBar> */}
      
      <nav className='navbar'>
        <ul className='ulnav'>
            <li className='list'><a href="">ProductList</a></li>
            <li className='list'><a href= "/productdetails" >ProductDetails</a></li>
            <li className='list'><a href= "/drowupdown" >Drowupdown</a></li>
            <li className='list'><a to="/category">Category</a></li>
        </ul>
     </nav>
    
    </>
  );
}
export default Header;
