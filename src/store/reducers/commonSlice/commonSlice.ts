import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

const commonSlice = createSlice({
    name: 'common',
    initialState,
    reducers: {
        setIsLoading(state, { payload }) {
            state.isLoading = payload
        }
    }
})

export const {
    setIsLoading,
} = commonSlice.actions;

export default commonSlice.reducer;