import { configureStore } from '@reduxjs/toolkit'
import accessTokenReducer from './src/slices/access_token'

export const store = configureStore({
  reducer: {
    access_token: accessTokenReducer
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch