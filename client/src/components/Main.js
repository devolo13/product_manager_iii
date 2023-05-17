// import thing from place
import { useEffect, useState } from "react";
import ProductForm from "./ProductForm";
import ProductList from "./ProductList";
import axios from 'axios';

function Main(props) {
  const [products, setProducts] = useState([]);
  const [loaded, setLoaded] = useState(false);

  useEffect(()=>{
    axios.get('http://localhost:8000/api/products')
      .then(res=>{
        setProducts(res.data);
        setLoaded(true);
      })
      .catch(err => console.log(err));
  },[props.flag]);

  return (
    <div className="container mt-3">
      <h1 className="text-center">Product Manager</h1>
      <ProductForm flag={props.flag} setFlag={props.setFlag}/>
      <hr />
      {loaded && <ProductList products={products} flag={props.flag} setFlag={props.setFlag}/>}
    </div>
  );
}

export default Main;
