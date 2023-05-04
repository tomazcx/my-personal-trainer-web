import {createSlice} from "@reduxjs/toolkit";

type USER_REDUCER = {
	token: string | null
}

const initialState: USER_REDUCER = {
	token: null
}

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setCurrentUser(state, action) {
			state.token = action.payload
		}
	}
})

export const {setCurrentUser} = userSlice.actions
export const userReducer = userSlice.reducer
