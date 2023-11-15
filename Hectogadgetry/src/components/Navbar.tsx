
export default function Navbar(){
    return (
        <>
        <nav className="navbar bg-body-tertiary">
        <div className="container-fluid">
        <a className="navbar-brand">HectoGadgetry</a>
        <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search Hectogadgetry" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
        </form>
        </div>
        </nav>
        </>
    )
}

