import { Link } from "react-router-dom";
export default function Navbar({totalPages}) {
  return (
    <div>
      <nav className="navbar navbar-light" style={{ backgroundColor: "#dedddc" }}>
        <div className="container-fluid">
          <a className="navbar-brand" href="/">
            <img src="to do image.png" alt="" width="30" height="24" className="d-inline-block align-text-top" />
            Tasks <br/>
            
            <small>{totalPages} Records</small>
          </a>

          <div className="d-flex flex-column align-items-end">
            {/* First row with joined buttons */}
            <div className="btn-group mb-2" role="group" style={{ backgroundColor: "#fee396" }}>
              <Link
                className="btn"
                type="button" to="NewForm"
                style={{ border: "1px solid #FFCC00", backgroundColor: "#fee396" }}
              >
                New Task
              </Link>
              <button
                className="btn"
                type="button"
                style={{ border: "1px solid #FFCC00", backgroundColor: "#fee396" }}
              >
                Refresh
              </button>
            </div>

            {/* Second row with search bar and search icon */}
            <div className="w-100">
              <form className="d-flex justify-content-end">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                <button className="btn btn-outline-success" type="submit">
                  <i className="bi bi-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
