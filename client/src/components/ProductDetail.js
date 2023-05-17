import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const Detail = (props) => {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  const navigate = useNavigate();
  const handleDelete = (id) => {
    axios.delete(`http://localhost:8000/api/product/${id}`)
      .then(navigate('/'))
      .catch(err => console.log(err));
  }

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/product/' + id)
      .then((res) => setProduct(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className='mt-3 text-center'>
      <h4 className='mb-3'>{product.title}</h4>
      <p className='mb-2'>Price: ${product.price}</p>
      <p className='mb-2'>Description: {product.description}</p>
      <div className='d-flex align-items-center justify-content-center'>
        <button className="btn btn-warning my-2 mx-1" onClick={e => navigate(`/product/${product._id}/edit`)}>Edit</button>
        <button className="btn btn-danger my-2 mx-1" onClick={e => handleDelete(product._id)}>Delete</button>
      </div>
    </div>
  );
};

export default Detail;
