import React from 'react'

const Login = () => {
    return (
       <div>
  {/*<div>
    ?php
if(isset($_SESSION['status']) && $_SESSION['status'] != '')
    {
echo '<h2 class=bg-danger text-white'.$_SESSION['status'].'';
    unset($_SESSION['status']);
    {'}'}
    ?&gt;
  </div>*/}
  <div className="login-box">
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
    <div className="login-logo">
      <img src="dist\img\polylogo.png" alt="logo not found" />
      <br />
      <b style={{fontSize: 14}}>Polyhose Information Management System</b>
    </div>
    {/* /.login-logo */}
    <div className="card">
      <div className="card-body login-card-body">
        <p className="login-box-msg">Sign in to start your session</p>
        <form className="user" action method="POST">
          <input type="hidden" name="mode" defaultValue="login" />
          <div className="form-group">
            <input type="text" className="form-control form-control-user" id="username" aria-describedby="emailHelp" placeholder="Emplyee code" autoComplete="off" name="username" />
          </div>
          <div className="form-group">
            <input type="password" className="form-control form-control-user" id="user_password" placeholder="Password" name="user_password" />
          </div>
          <button type="submit" className="btn btn-success btn-user btn-block"> Login </button>
          <hr />
        </form>
      </div>
      {/* /.login-card-body */}
    </div>
  </div>
</div>

    )
}

export default Login

