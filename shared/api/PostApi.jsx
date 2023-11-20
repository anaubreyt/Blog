import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const postApi = createApi({
  reducerPath: 'postApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      query: () => 'posts',
      onError: (error) => {
        throw new Error('Сервер не отвечает');
      }
    }),
    getPostById: builder.query({
      query: (postId) => `posts/${postId}`,
      onError: (error) => {
        throw new Error('Сервер не отвечает');
      }
    }),
  }),
});

export const { useGetPostsQuery, useGetPostByIdQuery } = postApi;