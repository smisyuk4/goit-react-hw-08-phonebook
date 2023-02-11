import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const apiSlice = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      // By default, if we have a token in the store, let's use that for authenticated requests
      const token = getState().auth.token;
      if (token){
        headers.set('authorization', `Bearer ${token}`)
      }
      return headers
    }
  }),
  tagTypes: ['users', 'contacts'],
  endpoints: builder => ({
    getCurrent: builder.query({
      query: () => '/users/current',
      providesTags: ['users'],    
    }),
    login: builder.mutation({
      query: credentials => ({
          url: '/users/login',
          method: 'POST',
          body: credentials,
      }),
      invalidatesTags: ['users'],
    }),
    logout: builder.mutation({
      query: () => ({
          url: '/users/logout',
          method: 'POST',
      }),
      invalidatesTags: ['users'],
    }),
    signup: builder.mutation({
      query: credentials => ({
          url: '/users/signup',
          method: 'POST',
          body: credentials,
      }),
      invalidatesTags: ['users'],
    }),    
    
    getContacts: builder.query({
      query: () => '/contacts',
      providesTags: ['contacts'],
    }),
    create: builder.mutation({
      query: credentials => ({
          url: '/contacts',
          method: 'POST',
          body: credentials,
      }),
      invalidatesTags: ['contacts'],
    }),
    remove: builder.mutation({
      query: (id)=>({
        url: `/contacts/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['contacts'],
    }),
    change: builder.mutation({
      query: ({id, name, number}) => ({
        url: `/contacts/${id}`,
        method: 'PATCH',
        body: {
          name,
          number,
        },
      }),
      invalidatesTags: ['contacts'],
    }),
  })
})

export const { 
  useLoginMutation, 
  useSignupMutation, 
  useLogoutMutation, 
  useGetCurrentQuery, 
  useGetContactsQuery, 
  useCreateMutation,
  useRemoveMutation,
  useChangeMutation
} = apiSlice