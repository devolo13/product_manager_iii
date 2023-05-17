import React, {useState, useParams} from 'react';
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const ProductForm = (props) => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState();
  const [description, setDescription] = useState('');
  const navigate = useNavigate();
  const HandleSubmit = (e) => {
    e.preventDefault();
    axios({
      method: 'post',
      url: 'http://localhost:8000/api/product',
      data: {
        title: title,
        price: price,
        description: description
      }
    })
    .then( res => {
      props.setFlag(!props.flag);
    }).catch(err =>{
      console.log(err);
    });
  }
  return (
    <form onSubmit={HandleSubmit}>
      <div className="bg-secondary rounded p-2 m-3 d-flex align-items-center">
        <label htmlFor="title" className='me-3 my-3 col-1'>Title</label>
        <input type="text" className='form-control my-3' onChange={e => setTitle(e.target.value)} value={title}/>
      </div>
      <div className="bg-secondary rounded p-2 m-3 d-flex align-items-center">
        <label htmlFor="price" className='me-3 my-3 col-1'>Price</label>
        <input type="number" className='form-control my-3' onChange={e => setPrice(e.target.value)} value={price}/>
      </div>
      <div className="bg-secondary rounded p-2 m-3 d-flex align-items-center">
        <label htmlFor="description" className='me-3 my-3 col-1'>Description</label>
        <input type="text" className='form-control my-3' onChange={e => setDescription(e.target.value)} value={description}/>
      </div>
      <div className='d-flex justify-content-center'>
        <button className="btn btn-secondary justify-content-center">Create</button>
      </div>
    </form>
  )
}

export default ProductForm