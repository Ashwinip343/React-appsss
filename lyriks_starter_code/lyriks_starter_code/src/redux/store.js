import { configureStore } from '@reduxjs/toolkit';

import playerReducer from './features/playerSlice';

import { shazamApi } from './Services/Shazam';

export const store = configureStore({
  reducer: {
    [shazamApi.reducerPath]:shazamApi.reducer,
    player: playerReducer,
  },
  middleware:(getDefaultMiddleware)=>getDefaultMiddleware().concat(shazamApi.middleware),
});
