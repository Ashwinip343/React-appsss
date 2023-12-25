// import {createApi,fetchBaseQuery} from '@reduxjs/toolkit/query/react'
// const options = {
//     method: 'GET',
//     headers: {
//       'X-RapidAPI-Key': 'a708b8711cmsh1ef1d9274178064p1fb759jsnc3fcfa70275e',
//       'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
//     }
//   };
  
//   fetch('https://spotify23.p.rapidapi.com/tracks/?ids=4WNcduiCmDNfmTEz7JvmLv', options)
//     .then(response => response.json())
//     .then(response => console.log(response))
//     .catch(err => console.error(err));
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const shazamApi = createApi({
  reducerPath: 'shazamApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam.p.rapidapi.com/charts/track',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key','a708b8711cmsh1ef1d9274178064p1fb759jsnc3fcfa70275e' );

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => '/charts/world' }),
    // getSongsByGenre: builder.query({ query: (genre) => `v1/charts/genre-world?genre_code=${genre}` }),
    // getSongsByCountry: builder.query({ query: (countryCode) => `v1/charts/country?country_code=${countryCode}` }),
    // getSongsBySearch: builder.query({ query: (searchTerm) => `v1/search/multi?search_type=SONGS_ARTISTS&query=${searchTerm}` }),
    // getArtistDetails: builder.query({ query: (artistId) => `v2/artists/details?artist_id=${artistId}` }),
    // getSongDetails: builder.query({ query: ({ songid }) => `v1/tracks/details?track_id=${songid}` }),
    // getSongRelated: builder.query({ query: ({ songid }) => `v1/tracks/related?track_id=${songid}` }),
  }),
});

export const {
  useGetTopChartsQuery,
//   useGetSongsByGenreQuery,
//   useGetSongsByCountryQuery,
//   useGetSongsBySearchQuery,
//   useGetArtistDetailsQuery,
//   useGetSongDetailsQuery,
//   useGetSongRelatedQuery,
} = shazamApi;




//     export const shazamApi = createApi(
//         {
//             reducerPath:'shazamApi',
//             baseQuery:fetchBaseQuery({
//                 baseUrl:'https://shazam.p.rapidapi.com',
//                 prepareHeaders:(headers)=>{
//                     headers.set('X-RapidAPI-Key','a708b8711cmsh1ef1d9274178064p1fb759jsnc3fcfa70275e');
//                     return headers;

//                 }
//             }),
//             endpoints : (builder)=>({
//                 getCharts: builder.query({query: (genre)=>'/charts/track/'+{genre}}),
//             }   )                 
//         }
//     );

//     export const useGetTopChartsQuery=shazamApi;