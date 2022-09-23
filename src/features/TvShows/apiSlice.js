import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"

export const apiSlice = createApi ({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({baseUrl: "https://api.tvmaze.com"}),
    endpoints: (builder) => ({
        getTvShows: builder.query({
            query:() => "/shows",
        }),
        getTvShowsDetail: builder.query({
            query:(id) => `/shows/${id}`,
        }),
        getEpisodesAll: builder.query({
            query:(id) => `/shows/${id}/episodes`,
        }),
        getEpisode: builder.query({
            query:(id) => `/episodes/${id}`,
        }),
    })
})

export const {
    useGetTvShowsQuery, useGetTvShowsDetailQuery, useGetEpisodesAllQuery, useGetEpisodeQuery
}  = apiSlice