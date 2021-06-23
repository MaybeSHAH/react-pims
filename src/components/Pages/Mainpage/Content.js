import React from 'react'

const Content = () => {
    return (
        <div>
  <style dangerouslySetInnerHTML={{__html: "\n  .poly1{\n    float:left !important;\n    margin-inline-end: 0.7rem;\n    color:#15561e;\n    font-weight: bold;\n  }\n  .text-xs{\n    color:#15561e !important;\n    font-weight: bold !important; \n    font-size: 13px !important;\n  }\n  " }} />
  {/* Content Wrapper. Contains page content */}
  <div className="content-wrapper">
    {/* Content Header (Page header) */}
    <div className="content-header">
      <div className="container-fluid">
        <div className="row mb-2">
          <div className="col-sm-6">
            <h1 className="h3 mb-0 text-gray-800">Planning Data</h1>
          </div>{/* /.col */}
          <div className="col-sm-6">
            <ol className="breadcrumb float-sm-right">
              <li className="breadcrumb-item"><a href="#">Home</a></li>
              <li className="breadcrumb-item active">Planning Data</li>
            </ol>
          </div>{/* /.col */}
        </div>{/* /.row */}
      </div>{/* /.container-fluid */}
    </div>
    {/* /.content-header */}
    <section className="content">
      <div className="container-fluid">
        <div className="row">
          <div className="col-xl-2 col-md-6 mb-4 card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  From Date</div>
                <input type="text" className="form-control" id="datepicker" autoComplete="off" placeholder="yyyy-mm-dd" width={155} name="dateVal" />
              </div>
            </div>
          </div>
          {/* To Date Card Example */}
          <div className="col-xl-2 col-md-6 mb-4 card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  To Date</div>
                <input type="text" className="form-control" id="datepicker1" autoComplete="off" placeholder="yyyy-mm-dd" width={155} name="dateVal" />
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-6 mb-4 card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Filter-1</div>
                <input type="text" className="form-control" id="datepicker" autoComplete="off" placeholder="Filter" width={155} name="dateVal" />
              </div>
            </div>
          </div>
          {/* To Date Card Example */}
          <div className="col-xl-2 col-md-6 mb-4 card-body">
            <div className="row no-gutters align-items-center">
              <div className="col mr-2">
                <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                  Filter-2</div>
                <input type="text" className="form-control" id="datepicker1" autoComplete="off" placeholder="Filter" width={155} name="dateVal" />
              </div>
            </div>
          </div>
          <div className="col-xl-2 col-md-6 mb-4 card-body">
            <div className="row no-gutters align-items-center">
              <button type="submit" className="btn btn-info" style={{backgroundColor: '#B8B8B8!important', border: 'none', width: '190px !important', height: '37px !important', fontSize: '1rem !important', fontWeight: '500 !important', marginTop: '1.2rem'}} onclick="clearData()">Clear</button>
            </div>
          </div>
          <div className="col-xl-2 col-md-6 mb-4 card-body">
            <div className="row no-gutters align-items-center">
              <button type="submit" id="submit_Btn" className="btn btn-success" style={{width: '190px !important', height: '37px !important', fontSize: '1rem !important', fontWeight: '500 !important', marginTop: '1.2rem'}} onclick="getRecords('submit')">Submit</button>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="card">
              <div className="card-header" style={{backgroundColor: '#15561e !important'}}>
                <p className="card-title brand-text font-weight-bold" style={{color: '#ffff !important'}}>DataTable </p>
              </div>
              {/* /.card-header */}
              <div className="card-body">
                <table id="example2" className="table table-bordered table-hover">
                  <thead>
                    <tr className="text-center">
                      <th>Sr. No.</th>
                      <th>Date &amp; Time</th>
                      <th>Machine Name</th>
                      <th>Parameter 1</th>
                      <th>Parameter 2</th>
                      <th>Parameter 3</th>
                      <th>Parameter 4</th>
                      <th>Operator</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                    <tr>
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                      <td />
                    </tr>
                  </tbody>
                </table>
              </div>
              {/* /.card-body */}
            </div>
            {/* /.card */}
            <div className="row" style={{marginTop: '1rem'}}>
              <form className style={{marginLeft: '1rem'}}>  
                <div className="position-relative form-group"><label htmlFor="exampleFile" className>Import CSV File</label><input name="file" id="exampleFile" type="file" className="form-control-file" />
                </div>
                <button className="mt-1 btn btn-success" style={{marginBottom: '0.5rem', width: 110}}>Submit</button>
              </form>
            </div>
          </div>
          {/* /.col */}
        </div>
        {/* /.row */}
      </div>
      {/* /.container-fluid */}
    </section>
    {/* /.content */}
  </div>
  {/* /.content-wrapper */}
</div>
    )
}

export default Content
