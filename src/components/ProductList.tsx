
export default function ProductList() {
  return (
    <>
    <section className="Types">
    <div className=" card overflow-x-auto mx-5 my-2" style={{overflowX:'scroll',WebkitOverflowScrolling:'touch'}}>
      <div className="row flex-nowrap mx-2 my-1">
        <div className="col-2">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-title">h1</div></div>
        <div className="col-2">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-title">h1</div></div>
        <div className="col-2">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-title">h1</div></div>
        <div className="col-2">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-title">h1</div></div>
        <div className="col-2">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-title">h1</div></div>
        <div className="col-2">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-title">h1</div></div>
        <div className="col-2">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-title">h1</div></div>
        <div className="col-2">
            <img src="..." className="card-img-top" alt="..."/>
            <div className="card-title">h1</div></div>    
      </div>
    </div>
    </section>
        <section className="carousel">
        <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg" className="d-block w-100" style={{height:'300px'}} alt="img"/>
    </div>
    <div className="carousel-item">
      <img src="https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg" className="d-block w-100" style={{height:'300px'}} alt="img"/>
    </div>
    <div className="carousel-item">
      <img src="https://t4.ftcdn.net/jpg/04/95/28/65/360_F_495286577_rpsT2Shmr6g81hOhGXALhxWOfx1vOQBa.jpg" className="d-block w-100" style={{height:'300px'}} alt="img"/>
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
