import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { REACT_APP_BASE_URL } from "../../utils/config";

console.log("🚀 ~ file: api.js:7 ~ REACT_APP_BASE_URL", REACT_APP_BASE_URL);

export const api = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: REACT_APP_BASE_URL }),
  reducerPath: "adminapi",
  endpoints: (builder) => ({
    // Getting a particular user
    getUsers: builder.query({
      query: (id) => ({
        url: `/general/user/${id}`,
      }),
      providesTags: ["User"],
    }),

    getZipCodes: builder.query({
      query: ({ searchValue }) => ({
        url: `/zipcode/all/${searchValue}`,
        method: "GET",
      }),
    }),
    getZipCodeDatas: builder.query({
      query: ({ searchZipCode }) => ({
        url: `/zipcode/data/${searchZipCode}`,
        method: "GET",
      }),
    }),
    getRecentZipCodes: builder.query({
      query: () => ({
        url: `/zipcode/recent`,
        method: "GET",
      }),
    }),
    getPopularZipCodes: builder.query({
      query: () => ({
        url: `/zipcode/popular`,
        method: "GET",
      }),
    }),
  }),
});

export const {
  useGetUsersQuery,
  useGetZipCodesQuery,
  useGetZipCodeDatasQuery,
  useGetRecentZipCodesQuery,
  useGetPopularZipCodesQuery,
} = api;
