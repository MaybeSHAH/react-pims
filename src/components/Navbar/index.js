import React from 'react'

const Navbar = () => {
    return (
        <div className='wrapper'>
            <nav className="main-header navbar navbar-expand navbar-white navbar-light">
  <ul className="navbar-nav">
    <li className="nav-item">
      <a className="nav-link" data-widget="pushmenu" href="#" role="button"><i className="fas fa-bars" /></a>
    </li>
  </ul>
  <ul className="navbar-nav ml-auto">
    {/* Nav Item - Search Dropdown (Visible Only XS) */}
    <li className="nav-item dropdown no-arrow d-sm-none">
      <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
        <i className="fas fa-search fa-fw" />
      </a>
      {/* Dropdown - Messages */}
      <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in" aria-labelledby="searchDropdown">
        <form className="form-inline mr-auto w-100 navbar-search">
          <div className="input-group">
            <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..." aria-label="Search" aria-describedby="basic-addon2" />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <i className="fas fa-search fa-sm" />
              </button>
            </div>
          </div>
        </form>
      </div>
    </li>
    {/* Nav Item - Messages */}
    <div className="topbar-divider d-none d-sm-block" />
    {/* Nav Item - User Information */}
    <li className="nav-item dropdown no-arrow">
      <a className="nav-link fa fa-user" href="#" id="userDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
      </a>
      {/* Dropdown - User Information */}
      <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in " aria-labelledby="userDropdown" style={{width: 350, lineHeight: '1rem'}}>
        <h4 className="modal-title" style={{textAlign: 'center !important'}}>{/*?= $_SESSION["username"] ?*/}</h4>
        <div className="modal-body" style={{textAlign: 'center !important', fontWeight: 'bold'}}>
          <p>Emp Code:&nbsp;&nbsp; {/*?= $_SESSION["ecode"] ?*/}</p>
          <p>Unit:&nbsp;&nbsp; {/*?= $_SESSION["eunit"] ?*/}</p>
          <p>Role:&nbsp;&nbsp; {/*?= $_SESSION["rolecode"] ?*/}</p>
        </div>
        <button className="mt-1 btn btn-info" id="resetBtn" data-toggle="modal" data-target="#resetModal" style={{float: 'left', marginInlineEnd: '6.5rem', marginLeft: '1rem'}}>Reset Password</button>
        <button className="mt-1 btn btn-success" href="#" data-toggle="modal" data-target="#logoutModal">Sign Out</button>
      </div>
    </li>
  </ul>
</nav>

            
        </div>
    )
}

export default Navbar
