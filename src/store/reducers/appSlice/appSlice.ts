import { createSlice } from '@reduxjs/toolkit'
import initialState from './initialState'

const appSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setSearchedUsers(state, { payload }) {
            state.users = payload
        },
        setUserDetails(state, { payload }) {
            state.userDetails = payload
        },
        setIsWrongSearchTerm(state, { payload }) {
            state.isWrongSearchTerm = payload
        }
    }
})

export const {
    setUserDetails,
    setSearchedUsers,
    setIsWrongSearchTerm,
} = appSlice.actions

export default appSlice.reducer;