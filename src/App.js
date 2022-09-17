import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./component/Home/Home";
import Order from "./component/Order/Order";
import Header from "./component/Header/Header";

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/home" element={<Home></Home>}></Route>
        <Route path="/order" element={<Order></Order>}></Route>
      </Routes>
    </div>
  );
}

export default App;
