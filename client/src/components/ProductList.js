import React from 'react';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';

const ProductList = (props) => {
  const navigate = useNavigate();
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/product/${id}`)
      .then( res => {
        props.setFlag(!props.flag);
        navigate('/');
      }).catch(err =>{
        console.log(err);
      });
  }
  return (
    <div className='text-center'>
      <h2>All Products:</h2>
        {props.products.map((product, i) =>
          <div key={product._id} className="d-flex align-items-center justify-content-center">
            {/*
              you could replace the view button and the product.title p-tag with
              <Link to={`/product/${product._id}`}>{product.title}</Link>
              but that's lame and I don't like it
            */}
            <p className='d-block my-3 col-2'>{product.title}</p>
            <button className="btn btn-primary my-2 mx-1" onClick={e => navigate(`/product/${product._id}`)}>View</button>
            <button className="btn btn-warning my-2 mx-1" onClick={e => navigate(`/product/${product._id}/edit`)}>Edit</button>
            <button className="btn btn-danger my-2 mx-1" onClick={e => handleDelete(product._id)}>Delete</button>
          </div>
        )}
    </div>
  )
}

export default ProductList;