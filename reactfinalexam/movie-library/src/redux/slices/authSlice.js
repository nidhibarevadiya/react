import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  user: null,
  favorites: [],
  watchlist: [],
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login(state, action) {
      state.user = action.payload
    },
    logout(state) {
      state.user = null
      state.favorites = []
      state.watchlist = []
    },
    addFavorite(state, action) {
      if (!state.favorites.find((m) => m.id === action.payload.id)) {
        state.favorites.push(action.payload)
      }
    },
    removeFavorite(state, action) {
      state.favorites = state.favorites.filter((m) => m.id !== action.payload)
    },
    addWatchlist(state, action) {
      if (!state.watchlist.find((m) => m.id === action.payload.id)) {
        state.watchlist.push(action.payload)
      }
    },
    removeWatchlist(state, action) {
      state.watchlist = state.watchlist.filter((m) => m.id !== action.payload)
    },
  },
})

export const {
  login,
  logout,
  addFavorite,
  removeFavorite,
  addWatchlist,
  removeWatchlist,
} = authSlice.actions

export default authSlice.reducer
