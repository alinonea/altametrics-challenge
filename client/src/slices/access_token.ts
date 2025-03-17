import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

export interface AccessTokenState {
  access_token: string
}

const initialState: AccessTokenState = {
    access_token: '',
}

export const accessTokenSlice = createSlice({
  name: 'access_token',
  initialState,
  reducers: {
    set: (state, action: PayloadAction<string>) => {
      state.access_token = action.payload
    },
  },
})

export const { set } = accessTokenSlice.actions

export default accessTokenSlice.reducer