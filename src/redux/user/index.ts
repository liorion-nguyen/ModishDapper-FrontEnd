import { createSlice } from "@reduxjs/toolkit";

const UserSlice = createSlice({
    name: 'user',
    initialState: {
        user: {}
    },
    reducers: {
        setUser(state, action) {
            return {
                ...state,
                user: action.payload
            }
        }
    },
})

export const UserActions = UserSlice.actions;
export default UserSlice.reducer;