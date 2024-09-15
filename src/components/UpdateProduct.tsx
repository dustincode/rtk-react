import React, { useState } from 'react';
import { useUpdateProductMutation } from '../reducers/product';
import { Product } from '../types';

const UpdateProduct: React.FC = () => {
  const [id, setId] = useState('');
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const [updateProduct, { isLoading, isError, error, isSuccess, data }] = useUpdateProductMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    await updateProduct({ id: Number(id), title, price: Number(price), description } as Partial<Product>);
    setId('');
    setTitle('');
    setPrice('');
    setDescription('');

  };

  return (
    <div>
      <h2>Cập Nhật Sản Phẩm</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID sản phẩm:</label>
          <input
            type="number"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
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
          {isLoading ? 'Đang cập nhật...' : 'Cập nhật sản phẩm'}
        </button>
      </form>
      {isError && <p>Lỗi: {JSON.stringify(error)}</p>}
      {isSuccess && <p>Cập nhật sản phẩm thành công: {JSON.stringify(data)}</p>}
    </div>
  );
};

export default UpdateProduct;
