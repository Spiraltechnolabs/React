import logo from "./logo.svg";
import {BrowserRouter,Link,Routes,Route} from "react-router-dom";
import "./App.css";
import AddUser from "./AddUser";
import Login from "./Login";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <Link to="/AddUser">Add user</Link>
        </nav>

        <Routes>
          <Route path="/AddUser" element={<AddUser />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
