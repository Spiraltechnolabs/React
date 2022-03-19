import React, { useState, useEffect } from "react";
import { db } from "./db";

function Login() {

    let style = 
    {
        display: "inline-table",
    };

        const [Users,setUser] = React.useState([]);

        function AuthorizeUser()
        {
            debugger;
            let eleUserName = document.getElementById("rmail").value;
            let elePassword = document.getElementById("inputPassword2").value;
            let user = Users.filter(x => x.Name == eleUserName && x.PassWord == elePassword);
            if(user.length == 1)
            {
                let link = user[0].Link;                
                alert("Huraayyy!! your now navigation to " + link)
            }
            else
            {
                    alert("you are not authorized.")
            }

        }

    useEffect(() => {
     
        db.collection("User").onSnapshot(function(data)
        { 
            data.docs.map(function (i)
            {
                Users.push(i.data())
            })
        });
      });
      
  return (
    <div style={style}>
  
        <div className="col-auto">
          <label for="staticEmail2" className="visually-hidden">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="rmail"
            aria-describedby="emailHelp"
            placeholder="Enter email"
          />
        </div>
        <div className="col-auto">
          <label for="inputPassword2" className="visually-hidden">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="inputPassword2"
            placeholder="Password"
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-primary mb-3" onClick={AuthorizeUser}>
            Confirm identity
          </button>
        </div>
    </div>
  );
}

export default Login;
