import { createSlice } from "@reduxjs/toolkit";

const SnackbarSlice = createSlice({
    name: 'snackbar',
    initialState: {
        mode: false,
        content: '',
        type: '', // variant could be success, error, warning, info, or default
    },
    reducers: {
        OnSnackbar(state, action) {
            return {
                ...state,
                mode: action.payload.mode,
                content: action.payload.content,
                type: action.payload.type,
            }
        },
    },
})

export const SnackbarActions = SnackbarSlice.actions;
export default SnackbarSlice.reducer;