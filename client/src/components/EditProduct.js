import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';

const EditProduct = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();
  const navigate = useNavigate;

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/product/' + id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, []);

  const HandleSubmit = e => {
    e.preventDefault();
    axios({
      method: 'patch',
      url: `http://localhost:8000/api/product/${id}`,
      data: {
        title: product.title,
        price: product.price,
        description: product.description
      }
    })
      .then()
      .catch();
  }

  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/product/${id}`)
      .then(navigate('/'))
      .catch(err => console.log(err));
  }

  return (
    <div className='mt-3 text-center'>
    <form onSubmit={HandleSubmit}>
      <div className="bg-secondary rounded p-2 m-3 d-flex align-items-center">
        <label htmlFor="title" className='me-3 my-3 col-1'>Title</label>
        <input type="text" className='form-control my-3' onChange={e => setProduct({title: e.target.value, price: product.price, description: product.description})} value={product.title}/>
      </div>
      <div className="bg-secondary rounded p-2 m-3 d-flex align-items-center">
        <label htmlFor="price" className='me-3 my-3 col-1'>Price</label>
        <input type="number" className='form-control my-3' onChange={e => setProduct({title: product.title, price: e.target.value, description: product.description})} value={product.price}/>
      </div>
      <div className="bg-secondary rounded p-2 m-3 d-flex align-items-center">
        <label htmlFor="description" className='me-3 my-3 col-1'>Description</label>
        <input type="text" className='form-control my-3' onChange={e => setProduct({title: product.title, price: product.price, description: e.target.value})} value={product.description}/>
      </div>
      <div className='d-flex justify-content-center'>
        <button className="btn btn-warning justify-content-center my-2 mx-1" type="submit">Edit</button>
        <button className="btn btn-danger my-2 mx-1" onClick={e => handleDelete(product._id)}>Delete</button>
      </div>
    </form>
    </div>
  );
};

export default EditProduct;
