// import logo from './logo.svg';
// import './App.css';
import Home from "./page/Home";
import AddUser from "./page/AddUser";
import EditUser from "./page/EditUser";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/AddUser" element={<AddUser />} />
            <Route path="/EditUser/:id" element={<EditUser />} />
            {/*<Home/>*/}
            {/*<AddUser/>*/}
            {/*<EditUser/>*/}
        </Routes>
    </div>
  );
}

export default App;
