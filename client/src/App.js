import { Route, Routes } from "react-router-dom";
import ProductDetail from "./components/ProductDetail"
import Main from './components/Main'
import EditProduct from "./components/EditProduct";
import { useState } from "react";

function App() {
  const [flag, setFlag] = useState(true);
  return (
    <div className="container mt-3">
      <Routes>
      <Route element={<Main flag={flag} setFlag={setFlag}/>} path="/"/>
      <Route element={<ProductDetail/>} path="/product/:id"/>
      <Route element={<EditProduct setFlag={setFlag}/>} path="/product/:id/edit"/>
      </Routes>
    </div>
  );
}

export default App;
