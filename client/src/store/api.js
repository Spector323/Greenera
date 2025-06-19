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
} = api;