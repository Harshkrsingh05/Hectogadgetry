
import { Link } from 'react-router-dom';

export default function ProductList() {
  // const categories = ['Screen devices', 'Smart TVs radio', 'Audio Devices', 'Cameras & lens', 'Gaming Accessories', 'Wearable Technology', 'Microcontroller & chips', 'Home Appliances'];
  return (
    <>
    {/* js likhna hai mobile screen ke liye. */}
    <section className="Types">
    <div className=" card overflow-x-auto mx-5 my-2" style={{overflowX:'scroll',WebkitOverflowScrolling:'touch'}}>
      <div className="row flex-nowrap mx-2">
          <div className="col-2"><Link to={`/products/Screen devices`}> 
            <img src="https://thumbs.dreamstime.com/b/businessman-s-tidy-desktop-work-tools-paperwork-computer-touch-screen-devices-stationery-wooden-surface-top-view-53577371.jpg" style={{width:'50px',height:'50px'}} className="card-img-top" alt="..."/>
            <div className="card-title">Screen Devices</div></Link></div>
            <div className="col-2"><Link to={`/products/Smart TVs radio`}>
            <img src="https://www.lg.com/in/images/tvs/md07554739/gallery/43UQ7550PSF-D-002.jpg" style={{width:'50px',height:'50px'}} className="card-img-top" alt="..."/>
            <div className="card-title">Smart TVs radio</div></Link></div>
            <div className="col-2"><Link to={`/products/Audio Devices`}> 
            <img src="https://cdn1.vectorstock.com/i/1000x1000/80/75/modern-and-retro-audio-devices-music-playing-vector-29078075.jpg" style={{width:'50px',height:'50px'}} className="card-img-top" alt="..."/>
            <div className="card-title">Audio Devices</div></Link></div>
            <div className="col-2"><Link to={`/products/Cameras & lens`}> 
            <img src="https://thumbs.dreamstime.com/b/professional-digital-camera-1572370.jpg" style={{width:'50px',height:'50px'}} className="card-img-top" alt="..."/>
            <div className="card-title">Cameras & lens</div></Link></div>
            <div className="col-2"><Link to={`/products/Gaming Accessories`}> 
            <img src="https://cdn4.vectorstock.com/i/1000x1000/13/83/gaming-accessories-and-professional-it-equipment-vector-36721383.jpg" style={{width:'50px',height:'50px'}} className="card-img-top" alt="..."/>
            <div className="card-title">Gaming Accessories</div></Link></div>
            <div className="col-2"><Link to={`/products/Wearable Technology`}> 
            <img src="https://headphonesaddict.com/wp-content/uploads/2021/09/Earbuds-vs-earphones.jpg" style={{width:'50px',height:'50px'}} className="card-img-top" alt="..."/>
            <div className="card-title">Wearable Technology</div></Link></div>
            <div className="col-2"><Link to={`/products/Microcontroller & chips`}> 
            <img src="https://cdn.sparkfun.com/assets/9/1/e/4/8/515b4656ce395f8a38000000.png" style={{width:'50px',height:'50px'}} className="card-img-top" alt="..."/>
            <div className="card-title">Microcontroller and chips</div></Link></div>
            <div className="col-2"><Link to={`/products/Home Appliances`}> 
            <img src="https://m.media-amazon.com/images/I/61JIrFcH2sL._AC_UF894,1000_QL80_.jpg" style={{width:'50px',height:'50px'}} className="card-img-top" alt="..."/>
            <div className="card-title">Home Appliances</div></Link></div>
      </div>
    </div>
    </section>
        <section className="carousel">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="3" aria-label="Slide 4"></button>

  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1600/270/image/42e1272ed0854e8e.jpeg?q=20" className="d-block w-100" style={{height:'300px'}} alt="img"/>
    </div>
    <div className="carousel-item">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/41bc0960f1ac51c3.jpg?q=20" className="d-block w-100" style={{height:'300px'}} alt="img"/>
    </div>
    <div className="carousel-item">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/555ec765f0f2aeca.jpeg?q=20" className="d-block w-100" style={{height:'300px'}} alt="img"/>
    </div>
    <div className="carousel-item">
      <img src="https://rukminim1.flixcart.com/fk-p-flap/1000/170/image/ab11f518b2101663.jpeg?q=20" className="d-block w-100" style={{height:'300px'}} alt="img"/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </section>
    </>
  )
}

