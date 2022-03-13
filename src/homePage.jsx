import React from 'react';


function HomePage() {
  return (
    <div className='home'>
      <nav>
        <div className='menu'>
          <h1 className='logo'>loopstudios</h1>
          <ul>

            <li><a href='#'>About</a></li>
            <li><a href='/careers'>Careers</a></li>
            <li><a href='/events'>Events</a></li>
            <li><a href='#'>Products</a></li>
            <li><a href='#'>Support</a></li>
          </ul>
        </div>
      </nav>

      <div className='experience'>IMMERSIVE <br />  EXPERIENCES <br /> THAT DELIVER</div>
    </div>
  )
}

export default HomePage;
