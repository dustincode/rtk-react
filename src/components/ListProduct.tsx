
import React from 'react';
import { useGetProductsQuery } from '../reducers/product';
import { Product } from '../types';

const ListProduct: React.FC = () => {
  const { data: products, error, isLoading } = useGetProductsQuery();

  if (isLoading) {
    return <div>Đang tải...</div>;
  }

  if (error) {
    return <div>Đã xảy ra lỗi: {JSON.stringify(error)}</div>;
  }

  return (
    <div>
      <h2>Danh sách sản phẩm</h2>
      <ul>
        {products?.map((product: Product) => (
          <li key={product.id}>
            <h3>{product.title}</h3>
            <p>Giá: {product.price}</p>
            <p>Mô tả: {product.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListProduct;
