import React, { useState } from 'react';
import { useDeleteProductMutation } from '../reducers/product';

const DeleteProduct: React.FC = () => {
  const [id, setId] = useState('');
  const [deleteProduct, { isLoading, isError, error, isSuccess, data }] = useDeleteProductMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await deleteProduct(Number(id));
    setId('');

  };

  return (
    <div>
      <h2>Xóa Sản Phẩm</h2>
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
        <button type="submit" disabled={isLoading}>
          {isLoading ? 'Đang xóa...' : 'Xóa sản phẩm'}
        </button>
      </form>
      {isError && <p>Lỗi: {JSON.stringify(error)}</p>}
      {isSuccess && <p>Xóa sản phẩm thành công: {JSON.stringify(data)}</p>}
    </div>
  );
};

export default DeleteProduct;
