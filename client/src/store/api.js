import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3333' }),
  endpoints: (builder) => ({
    getCategories: builder.query({
      query: () => '/categories/all',
    }),
    getProducts: builder.query({
      query: () => '/products/all',
    }),
    getProductsByCategory: builder.query({
      query: (id) => `/categories/${id}`,
      transformResponse: (response) => response, // Возвращаем весь объект { category, data }
    }),
    getProductById: builder.query({
      query: (id) => `/products/${id}`,
      transformResponse: (response) => response,
    }),
    sendOrder: builder.mutation({
      query: (body) => ({
        url: '/sale/send',
        method: 'POST',
        body,
      }),
    }),
  }),
});

export const {
  useGetCategoriesQuery,
  useGetProductsQuery,
  useSendOrderMutation,
  useGetProductsByCategoryQuery,
  useGetProductByIdQuery, // Новый хук
} = api;