import React from "react";
import { db } from "./db";
import {BrowserRouter,Link} from "react-router-dom";


function AddUser() {
  let style = {
    display: "inline-table",
  };

  function SaveUser() {
    debugger;
    let eleUserName = document.getElementById("exampleInputEmail1");
    let elePassword = document.getElementById("exampleInputPassword1");
    let eleLink = document.getElementById("exampleInputLink");
    //db.collection([CollectionName])
    db.collection("User").add({
      Name: eleUserName.value,
      PassWord: elePassword.value,
      Link: eleLink.value,
    });
  }

  return (
    <div>
     
        <nav>
          <Link to="/Login">Login</Link>
        </nav>        
     

      <div style={style}>
        <div className="form-group">
          <label htmlFor="exampleInputEmail1">Email address</label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputPassword1">Password</label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
            placeholder="Password"
          />
        </div>
        <div className="form-group">
          <label htmlFor="exampleInputLink">Assign Link</label>
          <input
            type="textbox"
            className="form-control"
            id="exampleInputLink"
            placeholder="Insert url"
          />
        </div>
        <div className="form-group form-check">
          <input type="checkbox" className="form-check-input" id="exampleCheck1" />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary" onClick={SaveUser}>
          Submit
        </button>
      </div>
    </div>
  );
}

export default AddUser;
