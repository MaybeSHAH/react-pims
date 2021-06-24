import React from 'react'
import { Link } from 'react-router-dom';

const Sidebar = () => {
    return (
        <div>
            {/* Main Sidebar Container */}
<aside className="main-sidebar sidebar-dark-primary elevation-4" style={{backgroundColor: '#15561e !important'}}>
  {/* Brand Logo */}
  <span className="brand-link" style={{backgroundColor: '#FFFFFF !important'}}>
    <img src="dist/img/polylogo.png" alt="Polyhose Logo" className="brand-image img-rect" style={{width: '6rem'}} />
  </span>
  {/* Sidebar */}
  <div className="sidebar">
    {/* Sidebar Menu */}
    <nav className="mt-2">
      <ul className="nav nav-pills nav-sidebar flex-column" data-widget="treeview" role="menu" data-accordion="false">
        {/* Add icons to the links using the .nav-icon class
         with font-awesome or any other icon font library */}
        <li className="nav-item menu-open ">
          <a href="./index.php" className="nav-link">
            <i className="nav-icon fa fa-home" />
            <p> Home </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="./runingStatus.php" className="nav-link">
            <i className="nav-icon fa fa-home" />
            <p> Running Status </p>
          </a>
        </li>
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-tachometer-alt" />
            <p>
              Dashboard
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./pirTracking.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>PIR Tracking</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./machineRunning.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Running Machine Status</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Production</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="finalreport.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Parameter</p>
              </a>
            </li>
          </ul>
        </li>
        {/*------------Start Parameter Live Nevigation ----------*/}
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-seedling" />
            <p>
              Live Parameter
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./mandrelLive.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Mandrel Machine</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./extruderLive.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Extruder  Machine</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./braiderLive.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Braider Machine</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./vulcaniserLive.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Vulcaniser Machine</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./testingLive.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Testing Machine</p>
              </a>
            </li>
          </ul>
        </li>
        {/*------------End Parameter Live Nevigation ----------*/}
        {/*------------Start Parameter Report Nevigation ----------*/}
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-sitemap" />
            <p>
              Parameter Reports
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./mandrelreport.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Mandrel Machine</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./extruderreport.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Extruder Machine</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./braiderreport.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Braider Machine</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./vulcanizerreport.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Vulcanizer Machine</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./testingreport.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Testing Machine</p>
              </a>
            </li>
          </ul>
        </li>
        {/*------------End Parameter Nevigation ----------*/}
        {/*------------Start Production Report Nevigation ----------*/}
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-industry" />
            <p>
              Production Reports
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./mandrelprod.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Mandrel Machine</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./extruderprod.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Extruder Machine</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./braiderprod.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Braider Machine</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./vulcanizerprod.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Vulcanizer Machine</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./testingprod.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Testing Machine</p>
              </a>
            </li>
          </ul>
        </li>
        {/*------------End Production Nevigation ----------*/}
        {/*------------Start Alarms Nevigation ----------*/}
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-bell" />
            <p>
              Alarms Report
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./mandrelalarm.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Mandrel Machine</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./extruderalarm.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Extruder  Machine</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./braideralarm.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Braider Machine</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./vulalarm.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Vulcaniser Machine</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./testingalarm.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Testing Machine</p>
              </a>
            </li>
          </ul>
        </li>
        {/*------------End Alarms Nevigation ----------*/}
        {/*------------Start Stoppage Nevigation ----------*/}
        <li className="nav-item">
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-stop-circle" />
            <p>
              Stoppage Report
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <Link to="./mandrelstoppage" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Mandrel Machine</p>
              </Link>
            </li>
            <li className="nav-item">
              <Link to="./extruderstoppage" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Extruder  Machine</p>
              </Link>
            </li>
            <li className="nav-item">
              <a href="./braiderstoppage.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Braider Machine</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./vulstoppage.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Vulcaniser Machine</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./testingstoppage.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Testing Machine</p>
              </a>
            </li>
          </ul>
        </li>
        {/*------------Stop Stoppage Nevigation ----------*/}
        {/*------------Start Master Nevigation ----------*/}
        <li className="nav-item"> {/*<?php if($_session["rolecode"] !="ADMIN" ){ ?>style="display:none"{/*?php } ?*/}
          <a href="#" className="nav-link">
            <i className="nav-icon fas fa-th" />
            <p>
              Masters
              <i className="fas fa-angle-left right" />
            </p>
          </a>
          <ul className="nav nav-treeview">
            <li className="nav-item">
              <a href="./tagMaster.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Tag Master</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="./userLevelMaster.php" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>User Level Master</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Privilege Master</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>User Master</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Tag Master</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Process Master</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Machine Master</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Drum Master</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Alarms Master</p>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <i className="fas fa-caret-right" />
                <p>Parameter Master</p>
              </a>
            </li>
          </ul>
        </li>
        {/*------------End Master Nevigation ----------*/}
      </ul>
    </nav>
    {/* /.sidebar-menu */}
  </div>
  {/* /.sidebar */}
</aside>
<div>
  <div className="modal fade" id="logoutModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
          <button className="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
        <div className="modal-footer">
          <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
          <a className="btn btn-primary" href="logout.php">Logout</a>
        </div>
      </div>
    </div>
  </div>
  {/* Reset Modal*/}
  <div className="modal fade" id="resetModal" tabIndex={-1} role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Reset Password</h5>
          <button className="close" type="button" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">×</span>
          </button>
        </div>
        <div className="modal-body" id="resetModalbody">
          {/* dynamic body from resetmodal.php */}
        </div>
        <div className="modal-footer">
          <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
        </div>
      </div>
    </div>
  </div>
</div>


            
        </div>
    )
}

export default Sidebar
