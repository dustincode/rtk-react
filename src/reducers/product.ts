import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Product } from "../types";

export const productApi = createApi({
    reducerPath: 'products',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://dummyjson.com' }),
    endpoints: (builder) => ({
        getProducts: builder.query<Product[], void>({
            query: () => '/products',
            transformResponse: (response: { products: Product[] }) => response.products,
        }),

        addProduct: builder.mutation<Product, Partial<Product>>({
            query: (product) => ({
                url: '/products/add',
                method: 'POST',
                body: product,
            }),
        }),

        updateProduct: builder.mutation<Product, Partial<Product>>({
            query: (product) => ({
                url: `/products/${product.id}`,
                method: 'PUT',
                body: product,
            }),
        }),

        deleteProduct: builder.mutation<Product, number>({
            query: (id) => ({
                url: `/products/${id}`,
                method: 'DELETE',
            }),
        }),
    }),
})

export const { useGetProductsQuery, useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation } = productApi;