import React from 'react'

const BraiderProd = () => {
    return (
        <div>
  <style dangerouslySetInnerHTML={{__html: "\n  .poly1{\n    float:right !important;\n    color:#15561e;\n    font-weight: bold;\n    width:60px;\n  }\n  .text-xs{\n    color:#15561e !important;\n    font-weight: bold !important; \n    font-size: 13px !important;\n  }\n\n  " }} />
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          {/*?php
 if ($ERROR_MSG <*/} "") {'{'} ?&gt;
          <div className="col-lg-12">
            <div className="alert alert-dismissable alert-<?php echo $ERROR_TYPE ?>" style={{height: '3rem'}}>
              <button data-dismiss="alert" className="close" type="button">x</button>
              <p>{/*?php echo $ERROR_MSG; ?*/}</p>
            </div>
            <div style={{height: 10}}>&nbsp;</div>
          </div>
          {/*?php } ?*/}
          <div className="col-sm-6">
            <h1 className="h3 mb-0 text-gray-800"> Braider Production Report</h1>
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Braider Production Report</li>
            </ol>
          </div>{/* /.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    <section className="content">
      <div className="container-fluid">
        <div className="row" style={{marginTop: '-1rem'}}>
          {/* From Date Card Example */}
          <div className="col-xl-4 col-md-5 mb-8 card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Select Daterange (YYYY-MM-DD)</div>
                <div id="reportrange" style={{background: '#fff', cursor: 'pointer', padding: '5px 10px', border: '1px solid #ccc', width: '100%'}}>
                  <i className="fa fa-calendar" />&nbsp;
                  <span /><i className="fa fa-caret-down" />
                </div>
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-3 mb-4 card-body">
            <select id="braid-prod-drop" className="form-control btn btn-default " style={{border: 'none', marginTop: '1.4rem', width: 190, height: '39px !important', backgroundColor: '#808080!important', color: '#ffff !important'}}>
              <option value={1} selected>Braider Machine-1</option>
              <option value={2}>Braider Machine-2</option>
              <option value={3}>Braider Machine-3</option>
              <option value={4}>Braider Machine-4</option>
              <option value={5}>Braider Machine-5</option>
              <option value={6}>Braider Machine-6</option>
              <option value={7}>Braider Machine-7</option>
              <option value={8}>Braider Machine-8</option>
            </select>
          </div>
          <div className="col-xl-2 col-md-3 mb-4 card-body">
            <select id="Shift-drop" className="form-control btn btn-default " style={{border: 'none', marginTop: '1.4rem', width: 190, height: '39px !important', backgroundColor: '#808080!important', color: '#ffff !important'}}>
              <option value={1} selected>Shift</option>
              <option value={2}>Shift A</option>
              <option value={3}>Shift B</option>
              <option value={4}>Shift C</option>
              <option value={5}>Full Day</option>
            </select>
          </div>
          <div> {/*<button id="filter" class="btn btn-outline-info btn-sm">Filter</button>
              <button id="reset" class="btn btn-outline-warning btn-sm">Reset</button>*/}</div>
          <div className="col-xl-2 col-md-2 mb-4 card-body">
            <div className="row no-gutters align-items-center">
              <button id="reset" className="btn btn-info" style={{backgroundColor: '#808080!important', border: 'none', width: '190px !important', height: '37px !important', fontSize: '1rem !important', fontWeight: '500 !important', marginTop: '1.4rem'}}>Reset</button>
            </div>
          </div>
          <div className="col-xl-2 col-md-2 mb-4 card-body">
            <div className="row no-gutters align-items-center">
              <button id="filter" className="btn btn-success" style={{width: '190px !important', height: '37px !important', fontSize: '1rem !important', fontWeight: '500 !important', marginTop: '1.4rem'}}>Filter</button>
            </div>
          </div>
        </div>
        {/* /.card-header */}
        <div className="card shadow mb-4">
          <div className="card-header py-3" style={{backgroundColor: '#15561e  !important'}}>
            <p className="card-title brand-text font-weight-bold" style={{color: '#ffff !important'}}>DataTable </p>
            <button className="mt-1 btn btn-default poly1" id="export"><i className="	fa fa-download" /> </button>
          </div>
          <div className="row">
            <div className="col-12">
              <div className="card">
                <div className="card-body">
                  <table id="braid-prod-records" className="table table-bordered table-hover display nowrap" style={{width: '100%'}}>
                    <thead>
                      <tr className="text-center">
                        <th>Sr. No.</th>
                        <th>Process Start Time</th>
                        <th>Process Stop Time</th>
                        <th>Hose Type</th>
                        <th>Hose Size</th>
                        <th>PIR</th>
                        <th>Operator Name</th>
                        <th>Actual Line Speed</th>
                        <th>Qty in Mtrs</th>
                        <th>Total Time</th>
                        <th>Production Time</th>
                        <th>Setup Time</th>
                        <th>Drum IN</th>
                        <th>Drum OUT</th>
                        <th>Other Loss</th>
                      </tr>
                    </thead>
                    <tbody>
                    </tbody>
                  </table>
                </div>
                {/* /.card-body */}
              </div>
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}
        </div>
        {/* /.container-fluid */}
      </div></section>
    {/* /.content */}
  </div>
</div>

    )
}

export default BraiderProd
