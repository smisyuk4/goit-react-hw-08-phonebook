import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCurrent } from "./authSlice"

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
  // tagTypes: ['contacts'],
  endpoints: builder => ({
    signup: builder.mutation({
      query: credentials => ({
          url: '/users/signup',
          method: 'POST',
          body: credentials,
      })
    }),
    login: builder.mutation({
      query: credentials => ({
          url: '/users/login',
          method: 'POST',
          body: credentials,
      })
    }),
    logout: builder.mutation({
      query: () => ({
          url: '/users/logout',
          method: 'POST',
      })
    }),
    getCurrent: builder.query({
      async queryFn(_arg, {getState, dispatch}, _extraOptions, fetchWithBQ) {
        const token = getState().auth.token
          
        if (token){
          const result = await fetchWithBQ('/users/current')         
          dispatch(setCurrent(result.data))
          return { data: 'all good'}
        } else {
          return { error: 'Token not found'}
        }               
      },      
    }),
    getContacts: builder.query({
      query: () => '/contacts',
    }),
    create: builder.mutation({
      query: credentials => ({
          url: '/contacts',
          method: 'POST',
          body: credentials,
      }),
      // invalidatesTags: ['contacts'],
    }),
  })
})

export const { 
  useLoginMutation, 
  useSignupMutation, 
  useLogoutMutation, 
  useGetCurrentQuery, 
  useGetContactsQuery, 
  useCreateMutation 
} = apiSlice