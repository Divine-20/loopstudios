import React from 'react'
import FontAwesome from 'react-fontawesome';
function Footer() {
  return (
    <div className='foot'>
      <nav>
     <div className='fmenu'>
    <h1 className='flogo'>loopstudios</h1> 
          <ul>
          
              <li><a href='#'>About</a></li>
              <li><a href='/careers'>Careers</a></li>
              <li><a href='/events'>Events</a></li>
              <li><a href='#'>Products</a></li>
          </ul>
          </div>
          <div className='icons'>
             <ul>
               <li><i className="fab fa-facebook-square"></i></li>
               <li><i className="fab fa-twitter"></i></li>
               <li><i className="fab fa-pinterest"></i></li>
               <li><i className="fab fa-instagram"></i></li>
             </ul>
             
          </div>
         <div>
      </div> 
      <div>
      <p>2021,loopstudios,All rights reserved.</p>
      </div>
      </nav>
    </div>
  )
}

export default Footer;
