
import React, { useState } from 'react';
import { useAddProductMutation } from '../reducers/product';
import { Product } from '../types';

const AddProduct: React.FC = () => {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const [addProduct, { isLoading, isError, error, isSuccess, data }] = useAddProductMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await addProduct({ title, price: Number(price), description } as Partial<Product>);
    setTitle('');
    setPrice('');
    setDescription('');
   
  };

  return (
    <div>
      <h2>Thêm Sản Phẩm Mới</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Tên sản phẩm:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="price">Giá:</label>
          <input
            type="number"
            id="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Mô tả:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Đang thêm...' : 'Thêm sản phẩm'}
        </button>
      </form>
      {isError && <p>Lỗi: {JSON.stringify(error)}</p>}
      {isSuccess && <p>Thêm sản phẩm thành công: {JSON.stringify(data)}</p>}
    </div>
  );
};

export default AddProduct;
