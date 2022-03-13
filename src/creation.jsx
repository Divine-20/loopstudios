import React from 'react'
import Footer from './footer'
function Creation() {
  return (
    <div>
      <div>
        <nav>
          <h1>OUR CREATIONS</h1>
          <button ><h2>SEE ALL</h2></button>
        </nav>
      </div>
      <div className='Images'>
        <div className='earth'>
          <img src='/image-deep-earth.jpg' style={{ marginLeft: 150 }} />
          <h1 style={{ marginTop: -130, marginLeft: 200 }}>DEEP <br />EARTH</h1>
        </div>
        <div className='night'>
          <img src='/image-night-arcade.jpg' style={{ marginLeft: 50 }} />
          <h1 style={{ marginTop: -130, marginLeft: 100 }}>NIGHT <br />ARCADE</h1>
        </div>
        <div className='soccer'>
          <img src='image-soccer-team.jpg' style={{ marginLeft: 50 }} />
          <h1 style={{ marginTop: -130, marginLeft: 100 }}>SOOCER <br />TEAM VR</h1>
        </div>
        <div className='grid'>
          <img src='/image-grid.jpg' style={{ marginLeft: 50 }} />
          <h1 style={{ marginTop: -130, marginLeft: 100 }}>THE <br /> GRID</h1>
        </div>
      </div>
      <div className='images2'>
        <div className='above'>
          <img src='/image-from-above.jpg' style={{ marginLeft: 150 }} />
          <h1 style={{ marginLeft: 200 }}>FROM UP<br /> ABOVE VR</h1>
        </div>
        <div className='pocket'>
          <img src='/image-pocket-borealis.jpg' style={{ marginLeft: 50 }} />
          <h1 style={{ marginLeft: 100 }}>POCKET <br /> BOREALIS</h1>
        </div>
        <div className='curiosity'>
          <img src='/image-curiosity.jpg' style={{ marginLeft: 50 }} />
          <h1 style={{ marginLeft: 100 }}>THE <br /> CURIOSITY</h1>
        </div>
        <div className='fisheye'>
          <img src='/image-fisheye.jpg' style={{ marginLeft: 50 }} />
          <h1 style={{ marginLeft: 100 }}>MAKE IT <br /> FISHEYE</h1>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Creation
